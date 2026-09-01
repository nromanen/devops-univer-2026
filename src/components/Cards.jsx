// components/Cards.jsx
import { useState, useRef, useEffect } from "react";

// Card with icon in colored circle + top border
export function InfoCardFeatured({ icon: Icon, title, subtitle, description, color, delay = 1, children }) {
  return (
    <div className={`info-card info-card--top-${color} fade-in-delay-${delay}`}>
      <div className={`info-card__icon-wrapper info-card__icon-wrapper--${color}`}>
        <Icon className={`info-card__icon info-card__icon--${color}`} />
      </div>
      <h3 className="info-card__title">{title}</h3>
      {subtitle && <p className="info-card__subtitle">{subtitle}</p>}
      <p className="info-card__text">{description}</p>
      {children}
    </div>
  );
}

// Tooltip component
function Tooltip({ content, color }) {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setVisible(false);
      }
    }
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [visible]);

  return (
    <span
      ref={wrapperRef}
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <span
        className={`tooltip-trigger tooltip-trigger--${color}`}
        onClick={() => setVisible((v) => !v)}
        aria-label="Детальніше"
      >
        ⓘ
      </span>
      {visible && (
        <div className={`tooltip-content tooltip-content--${color}`}>
          {content}
        </div>
      )}
    </span>
  );
}

// Simple card with small icon + left border + optional tooltip
export function InfoCard({ icon: Icon, title, subtitle, description, tooltip, color, delay = 1 }) {
  return (
    <div className={`info-card info-card--${color} fade-in-delay-${delay}`}>
      {Icon && <Icon className={`icon-md text-${color} mb-sm`} />}
      <div className="flex items-center gap-xs">
        <h3 className="info-card__title">{title}</h3>
        {tooltip && <Tooltip content={tooltip} color={color} />}
      </div>
      {subtitle && <p className="info-card__subtitle">{subtitle}</p>}
      <p className="info-card__text">{description}</p>
    </div>
  );
}

// Card with badge letter
export function BadgeCard({ letter, title, subtitle, description, color, delay = 1 }) {
  return (
    <div className={`info-card info-card--${color} fade-in-delay-${delay}`}>
      <div className="flex items-center gap-sm mb-sm">
        <span className={`badge badge--solid-${color}`}>{letter}</span>
        <h3 className="info-card__title">{title}</h3>
      </div>
      {subtitle && <p className="info-card__subtitle">{subtitle}</p>}
      <p className="info-card__text">{description}</p>
    </div>
  );
}