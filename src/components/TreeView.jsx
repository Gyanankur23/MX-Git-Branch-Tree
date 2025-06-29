import React, { useState } from "react";

/**
 * Recursively renders a file/directory tree.
 * @param {{ name: string, node: { type: string, children: object } }} props
 */
function TreeNode({ name, node, level = 0 }) {
  const [open, setOpen] = useState(false);
  const isFile = node.type === "file";

  return (
    <div style={{ paddingLeft: level * 16 }} className="mb-1">
      <div className="flex items-center">
        {!isFile && (
          <button
            onClick={() => setOpen(o => !o)}
            className="mr-1 text-sm focus:outline-none"
          >
            {open ? "▼" : "▶"}
          </button>
        )}
        <span className="text-sm">
          {isFile ? "📄" : "📁"} {name}
        </span>
      </div>
      {!isFile && open && (
        <div>
          {Object.entries(node.children).map(([childName, childNode]) => (
            <TreeNode
              key={childName}
              name={childName}
              node={childNode}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function TreeView({ tree }) {
  return (
    <div className="mt-4">
      {Object.entries(tree).map(([name, node]) => (
        <TreeNode key={name} name={name} node={node} />
      ))}
    </div>
  );
}
