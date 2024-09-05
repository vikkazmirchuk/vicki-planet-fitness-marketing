import './Footer.scss'
import viatouchLogo from "./../../assets/img/viatouch-logo.png";
import { navigationItems } from "../../constants/navigation-items";
import { NavLink } from "react-router-dom";

function Footer(props) {
    return (
        <div className={'footer'}>
            <div className={'navigation-links'}>
                <ul>
                    <li key={'home'}>
                        <NavLink to={'/'} onClick={() => console.log('Clicked')}>
                            Home
                        </NavLink>
                        <div className={'border-bottom'}></div>
                    </li>
                    {navigationItems.map(item => (
                        <li key={item.id}>
                            <NavLink to={item.link} onClick={() => console.log('Clicked')}>
                                {item.title}
                            </NavLink>
                            <div className={'border-bottom'}></div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={'contact-info-wrapper'}>
                <div className={'logo'}>
                    <img src={viatouchLogo} alt="Viatouch Logo"/>
                </div>
                <div className={'contact-info'}>
                    <div className={'contact-info-row'}>10505 Roselle Street, Ste 200,</div>
                    <div className={'contact-info-row'}>San Diego, California 92121</div>
                    <div className={'contact-info-row'}>info@viatouchmedia.com</div>
                    <div className={'contact-info-row'}>1-866-942-0804</div>
                </div>
            </div>
        </div>
    );
}

export default Footer