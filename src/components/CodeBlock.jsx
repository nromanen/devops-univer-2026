import { useState } from "react";

/**
 * CodeBlock — code block with title and copy button.
 * All colors via theme CSS variables (supports dark/light).
 *
 * Props:
 *   title    {string}  — header (file name or label), optional
 *   children {string}  — code content
 */
export default function CodeBlock({ children, title, color = "purple" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={`code-block code-block--${color}`}>
      {title && (
        <div className="code-block__header">
          <span className="code-block__title">{title}</span>
          <button
            onClick={handleCopy}
            className={`code-block__copy${copied ? " code-block__copy--copied" : ""}`}
          >
            {copied ? "✓ скопійовано" : "copy"}
          </button>
        </div>
      )}
      <pre className="code-block__pre">
        <code className="code-block__code">{children.trim()}</code>
      </pre>
    </div>
  );
}