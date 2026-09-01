import { ExternalLink } from 'lucide-react';

/**
 * ExtLink — External link with icon, theme-aware via CSS variables.
 *
 * Props:
 *   href     {string}
 *   color    {"blue"|"orange"|"purple"|"green"|"red"|"yellow"} — default "blue"
 *   children {ReactNode}
 */
export default function ExtLink({ href, children, color = 'blue' }) {
  const className = color === 'blue' ? 'ext-link' : `ext-link ext-link--${color}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ExternalLink size={14} />
    </a>
  );
}