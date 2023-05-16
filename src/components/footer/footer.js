import AppNav from "../app-nav/app-nav";
import Divider from '../divider/divider';

import './footer.scss'

const Footer = () => {
    const style = {
        navbar: {
            margin: '0 auto',
            position: 'ralative',
            width: '355px',
            height: '40px',
        },
        'navbar__wrapper': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            listStyleType: 'none',
        },
        'navbar__link': {
            fontFamily: 'Merienda',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '17px',
            color: '#000',
            textDecoration: 'none',
        },
      };
    return (
        <footer className="footer">
            <div className="container">
                <AppNav 
                    src={"../../icons/logo_black.svg"}
                    style={style}/>
                <Divider 
                    url={'../../icons/hr_logo_black.svg'} 
                    color={'#000'}/>
            </div>
        </footer>
    )
}

export default Footer;