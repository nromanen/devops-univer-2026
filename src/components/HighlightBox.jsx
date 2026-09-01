/**
 * HighlightBox — Colored hint block with icon and left border.
 *
 * Props:
 *   color   {"blue"|"green"|"orange"|"red"|"purple"|"yellow"|"cyan"}
 *   icon    {LucideIcon} — optional
 *   children {ReactNode}
 *
 * Example:
 *   <HighlightBox color="orange" icon={AlertTriangle}>
 *     <code>if: always()</code> — critical!
 *   </HighlightBox>
 */
export default function HighlightBox({ children, color = "blue", icon: Icon }) {
  return (
    <div className={`outlined-card outlined-card--${color} outlined-card--highlight`}>
      {Icon && <Icon className={`outlined-card__icon text-${color}`} />}
      <div className="fs-body text-secondary" style={{ margin: 0 }}>{children}</div>
    </div>
  );
}