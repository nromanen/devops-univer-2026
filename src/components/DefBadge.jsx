/**
 * DefBadge — Definition row: term + description
 *
 * Props:
 *   term        {string}
 *   description {string}
 *   color       {"blue"|"purple"|"green"|"orange"|"cyan"|"yellow"}
 *   nowrap      {boolean} — if true, prevents the term badge from wrapping
 *                           to multiple lines (useful for short abbreviations
 *                           with spaces like "PCI DSS", "SOC 2"). Default: false.
 */
export default function DefBadge({ term, description, color = "blue", nowrap = false }) {
  const className = `def-badge${nowrap ? ' def-badge--nowrap' : ''}`;
  return (
    <div className={className}>
      <span className={`badge badge--solid-${color}`}>{term}</span>
      <span className="def-badge__desc">{description}</span>
    </div>
  );
}