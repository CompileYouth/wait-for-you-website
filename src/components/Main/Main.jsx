import './Main.less';

import React, { Component } from 'react';
// import * as GuestImgs from './GuestImgs';
import GuestConfig from './GuestInfo';
import Item from './Item/Item.jsx';

class Main extends Component {
    render() {
        return (<header className="wfy-main">
            <div className="container">
                {
                    GuestConfig.map((config) => {
                        return <Item guest={config} key={config.no} />;
                    })
                }
            </div>
        </header>);
    }
}

export default Main;