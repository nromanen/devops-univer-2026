import React from 'react';
import { BookOpenCheck } from 'lucide-react';

/**
 * SelfStudyBadge — corner marker for slides left to self-study.
 *
 * Rendered by LectureLayout for any slide whose entry in the slides
 * array carries `selfStudy: true`. Individual slide components stay
 * untouched — the flag is data, not markup.
 */
export default function SelfStudyBadge() {
  return (
    <div className="self-study-badge">
      <BookOpenCheck className="self-study-badge__icon" />
      <span className="self-study-badge__text">Для самостійного опрацювання</span>
    </div>
  );
}