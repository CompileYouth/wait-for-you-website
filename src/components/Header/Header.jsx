import './Header.less';

import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (<header className="wfy-header">
            <div className="container">
                <div className="logo">
                    <a className="logo-link"> </a>
                </div>
            </div>
        </header>);
    }
}

export default Header;