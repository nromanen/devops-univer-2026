// components/DefBadge.jsx
// Всі кольори через CSS змінні теми (підтримує dark/light).

/**
 * DefBadge — Definition row: term + description.
 *
 * Props:
 *   term        {string}
 *   description {string}
 *   color       {"blue"|"purple"|"green"|"orange"|"cyan"|"yellow"}
 */
export default function DefBadge({ term, description, color = "blue" }) {
  return (
    <div className={`def-badge def-badge--${color}`}>
      <span className="def-badge__term">{term}</span>
      <span className="def-badge__desc">{description}</span>
    </div>
  );
}