import './Item.less';

import React, { Component } from 'react';

class Item extends Component {
    render() {
        const config = this.props.guest;

        return (<div className="main-item">
            <div>
                <div className={`guest guest-${config.no}`}>
                    {
                    // <img className="photo" src={this.props.img} />
                    }
                </div>
                <div className="info">
                    <div className="place-edu">
                        <span>{config.place} / {config.education}</span>
                    </div>
                    <div className="position-age">
                        <span>{config.occupation} {config.age}</span>
                    </div>
                    <div className="no">迎风来 NO.{config.no}</div>
                </div>
            </div>
        </div>);
    }
}

export default Item;