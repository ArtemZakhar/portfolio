import './appHeader.scss';
import fb from './icons/facebook.svg';
import telegram from './icons/telegram-app.svg';
import linkedin from './icons/icons8-linkedin-circled.svg';
import eng from './icons/Uk.svg';
import ua from './icons/ukraine.svg';
import home from './icons/home.svg';

const AppHeader = () => {
  return (
    <header className="app__header">
        <div className="home__track">
          <div className="item">
            <a href="./"><img src={home} alt="home" className="icon"/></a>
          </div>
        </div>
        <div className="link__track">
          <div className="item">
            <a href="https://www.facebook.com/artem.zakharchuk.7/"><img src={fb} alt="icon_FB" className="icon"/></a>
          </div>
          <div className="item">
            <a href="https://t.me/Artem_Zakharchuk"><img src={telegram} alt="icon_telegram" className="icon"/></a>
          </div>
          <div className="item">
            <a href="https://www.linkedin.com/in/artem-zakharchuk-818ba3131/"><img src={linkedin} alt="icon_linkedin" className="icon"/></a>
          </div>
        </div>
        <div className="language__track">
          <div className="item">
            <a href="eng"><img src={eng} alt="eng_language" className="icon"/></a>
          </div>
          <div className="item">
            <a href="\"><img src={ua} alt="ua_language" className="icon"/></a>
          </div>
        </div>
    </header>
)
}

export default AppHeader;