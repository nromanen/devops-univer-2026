import { createContext } from 'react';

/**
 * SlideNavContext — lets slide components navigate within the lecture.
 *
 * Provided by LectureLayout:
 *   goToSlide(id) — jump to the slide with this id
 *   numberOf(id)  — position of that slide in the full deck (as shown in the nav bar)
 *
 * Outside LectureLayout the value is null.
 */
const SlideNavContext = createContext(null);

export default SlideNavContext;