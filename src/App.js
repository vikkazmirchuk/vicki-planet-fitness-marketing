import React, { Fragment, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import LoginPage from './pages/login-page/Login';
import HomePage from "./pages/home-page/Home";
import Layout from "./components/layout/Layout";

const withRouter = (Component) => {
    return (props) => {
        const history = useNavigate();
        return <Component history={history} {...props}/>
    }
}

function App(props) {
    const [userId, setUserId] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [authLoading, setAuthLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('vickiUserId');

        if (!userId) {
            return;
        }

        setIsAuth(true);
        setUserId(userId);
    }, []);

    const loginHandler = async (authData) => {
        setAuthLoading(true);
        setError(null);

        try {
            const response = await fetch('https://viatouchmedia-test.apigee.net/loyalty/pf-landing/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: authData.username,
                    password: authData.password
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Could not authenticate you!');
            }

            const userData = await response.json();
            setIsAuth(true);
            setAuthLoading(false);
            setUserId(userData.username);
            localStorage.setItem('vickiUserId', userData.username);
        } catch (err) {
            setIsAuth(false);
            setAuthLoading(false);
            setError(err.message);
        }
    };

    return (
        <Fragment>
            {
                isAuth
                    ? (
                        <Layout>
                            <Routes>
                                <Route
                                    path="/"
                                    element={<HomePage/>}
                                />
                                <Route path="*"
                                       element={null}/>
                            </Routes>
                        </Layout>
                    )
                    : (
                        <Routes>
                            <Route path="*"
                                   element={(
                                       <LoginPage
                                           {...props}
                                           onLogin={loginHandler}
                                           loading={authLoading}
                                           error={error}
                                       />
                                   )}/>
                        </Routes>
                    )
            }
        </Fragment>
    );
}

export default withRouter(App);
