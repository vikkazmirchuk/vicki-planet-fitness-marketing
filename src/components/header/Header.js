import './Header.scss'
import viatouchLogo from "./../../assets/img/viatouch-logo.png";
import { NavLink } from "react-router-dom";
import { navigationItems } from "../../constants/navigation-items";

function Header(props) {
    return (
        <div className={'header'}>
            <div className={'logo'}>
                <NavLink to="/">
                    <img src={viatouchLogo} alt="Viatouch Logo"/>
                </NavLink>
            </div>
            <div className={'navigation-links'}>
                <ul>
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
        </div>
    );
}

export default Header;