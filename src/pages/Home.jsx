import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import TreeView from "../components/TreeView";

function buildTree(items) {
  const root = {};
  items.forEach(({ path, type }) => {
    const parts = path.split("/");
    let curr = root;
    parts.forEach((part, idx) => {
      const isFile = idx === parts.length - 1 && type === "blob";
      if (!curr[part]) {
        curr[part] = { type: isFile ? "file" : "directory", children: {} };
      }
      curr = curr[part].children;
    });
  });
  return root;
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [tree, setTree] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTree = async () => {
    setError("");
    setTree(null);
    const match = url.match(/github\.com\/([^/]+)\/([^/]+)(?:$|\/)/);
    if (!match) {
      setError("Invalid GitHub URL");
      return;
    }
    const [, owner, repo] = match;
    setLoading(true);
    try {
      // 1) fetch repo to get default branch
      const repoRes = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      if (!repoRes.ok) throw new Error("Repo not found");
      const { default_branch } = await repoRes.json();

      // 2) fetch tree (recursive)
      const treeRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/git/trees/${default_branch}?recursive=1`
      );
      if (!treeRes.ok) throw new Error("Failed to fetch tree");
      const { tree: items } = await treeRes.json();

      setTree(buildTree(items));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Repo Tree Viewer</h1>
      <div className="flex space-x-2 mb-4">
        <Input
          placeholder="https://github.com/owner/repo"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <Button onClick={fetchTree} disabled={loading}>
          {loading ? "Loading…" : "Fetch Tree"}
        </Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {tree && <TreeView tree={tree} />}
    </div>
  );
}
