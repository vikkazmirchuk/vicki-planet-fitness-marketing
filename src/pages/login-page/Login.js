import React, { useState } from 'react';

import './Login.scss';

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={'login-page'}>
            <div className={'login-form-wrapper'}>
                <div className={'page-title'}>Login</div>

                {props.error && (
                    <div className={'error-container'}>
                        {props.error}
                    </div>
                )}
                
                <form className={'w-100'}>
                    <div className={'form-control'}>
                        <label htmlFor={'username'}>Username</label>
                        <input
                            id="username"
                            type="text"
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                        />
                    </div>

                    <div className={'form-control'}>
                        <label htmlFor={'password'}>Password</label>
                        <input
                            id="password"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>

                    <div>
                        <button
                            type={'button'}
                            className={[
                                'button',
                                'success',
                                'ml-auto'
                            ].join(' ')}
                            disabled={props.loading}
                            onClick={() => {
                                props.onLogin({
                                    username: username,
                                    password: password
                                })
                            }}
                        >
                            {props.loading ? 'Loading...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
