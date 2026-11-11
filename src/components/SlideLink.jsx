import { useContext } from 'react';
import SlideNavContext from './SlideNavContext';

/**
 * SlideLink — clickable reference to another slide of the same lecture.
 *
 * Links by slide id, not by position, and shows the current position number,
 * so references stay correct after inserting slides like '9_1'.
 *
 * Props:
 *   to       {number|string} — id of the target slide from the slides array
 *   short    {boolean}       — render only the number ("8" instead of "Слайд 8")
 *   children {ReactNode}     — optional custom text instead of the default label
 *
 * Example:
 *   subtitle={<SlideLink to={8} />}
 *   subtitle={<>Слайди <SlideLink to={11} short />, <SlideLink to={16} short /></>}
 */
export default function SlideLink({ to, short = false, children }) {
  const nav = useContext(SlideNavContext);
  const number = nav?.numberOf(to);

  const label = children ?? (short ? number : `Слайд ${number}`);

  // Unknown id or rendered outside LectureLayout: plain text, no link
  if (!nav || number === undefined) {
    return <span>{children ?? null}</span>;
  }

  return (
    <a
      href="#"
      className="ext-link"
      onClick={(e) => {
        // keep the hash router untouched
        e.preventDefault();
        nav.goToSlide(to);
      }}
    >
      {label}
    </a>
  );
}