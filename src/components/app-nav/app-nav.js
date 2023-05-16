
const AppNav = ({ src, style }) => {
    return (
      <div className="navbar" style={style.navbar}>
        <ul className="navbar__wrapper" style={style['navbar__wrapper']}>
          <li className="navbar__item">
            <div>
              <img src={src} alt="logo" />
              <a href="#" className="navbar__link" style={style['navbar__link']}>
                Coffee house
              </a>
            </div>
          </li>
          <li className="navbar_item">
            <a href="#" className="navbar__link" style={style['navbar__link']}>
              Our coffee
            </a>
          </li>
          <li className="navbar_item">
            <a href="#" className="navbar__link" style={style['navbar__link']}>
              For your pleasure
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  

export default AppNav;