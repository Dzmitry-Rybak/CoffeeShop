import AppNav from '../app-nav/app-nav';
import Divider from '../divider/divider';

import './app-head.scss'

const AppHead = () => {
    const style = {
        navbar: {
          position: 'absolute',
          top: '30px',
          left: '148px',
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
          color: '#FFFFFF',
          textDecoration: 'none',
        },
        'navbar__link:hover': {
          textDecoration: 'underline',
        },
      };
      
      
    return (
        <section className="app-head">
            <div className="container">
                <AppNav 
                    src={"../../icons/Logo.svg"}
                    style={style}/>
                <h1 
                    className='title title_app-header' 
                    style={{'--title-color': '#fff'}}>Everything You Love About Coffee</h1>    
                <Divider url={'./icons/hr_logo.svg'}/>
                <div 
                    className="title title_24  title_mt34" 
                    style={{'--title-color': '#fff'}}>We makes every day full of energy and taste</div>
                <div 
                    className="title title_24 title_mt20" 
                    style={{'--title-color': '#fff'}}>Want to try our beans?</div>
                <button className="btn">More</button>
            </div>
        </section>
    )
}

export default AppHead;