
import Divider from '../divider/divider';
import './about-beans.scss'

const AboutBeans = () => {
    return (
        <section className="about__beans">
            <div className="container">
                <div className="about__beans__wrapper">
                    <div className="about__beans-item">
                        <img src="../img/girl.jpeg" alt="" className="about__beans_img" />
                    </div>
                    <div className="about__beans__descr">
                        <div className="title title_24">
                            About our beans
                        </div>
                        <Divider url={'../../icons/hr_logo_black.svg'} color={'#000'}/>
                        <div className="about__beans__text">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br />
                        <br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        </div>
                    </div>
                </div>
                <div className='about__beans_line'></div>
            </div>
        </section>
    )
}

export default AboutBeans;