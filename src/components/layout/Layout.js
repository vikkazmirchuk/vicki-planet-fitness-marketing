import './Layout.scss'
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Layout (props) {
    return (
        <div className={'layout'}>
            <div className={'header-wrapper'}><Header /></div>
            <div className={'main-content'}>
                <div className={'flex-1'}>
                    {props.children}
                </div>
                <div className={'footer-wrapper'}><Footer /></div>
            </div>
        </div>
    );
}

export default Layout;