import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <div className="box-layout__actions">
                <button className="button" onClick={() => startLogin('GOOGLE')}>
                    Login with Google
                </button>
                <button className="button" onClick={() => startLogin('GITHUB')}>
                    Login with Github
                </button>
            </div>
        </div>
    </div>
);

const mapDispatchToprops = (dispatch) => ( {
    startLogin: (providerName) => dispatch(startLogin(providerName))
} );

export default connect(undefined, mapDispatchToprops)(LoginPage);