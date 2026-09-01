export default function SlideHeader({ icon: Icon, title, subtitle }) {
    return (
      <header className="slide-header">
        <div className="slide-header__wrapper">
          <Icon className="slide-header__icon" />
          <div className="slide-header__content">
            <h2 className="slide-header__title">{title}</h2>
            <p className="slide-header__subtitle">{subtitle}</p>
          </div>
        </div>
      </header>
    );
  }