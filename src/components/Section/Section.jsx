import './Section.less';

import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (<section className="wfy-section">
            <div className="container">
                <div className="item item1">
                    <a>
                        <div className="content">
                            <div className="info">
                                <h2>迎风来19 Time to move on</h2>
                                <div className="personal-info">
                                    <span className="pi-place">南京</span>
                                    <span className="pi-age">1992</span>
                                    <span className="pi-occupation">投资并购</span>
                                    <span className="education">北大光华</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item item2">
                    <a>
                        <div className="content">
                            <div className="info">
                                <h2>迎风来12 你是这个世界送给我的情书</h2>
                                <div className="personal-info">
                                    <span className="pi-place">南京</span>
                                    <span className="pi-age">1993</span>
                                    <span className="pi-occupation">工业设计</span>
                                    <span className="education">东南大学博士</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item item3">
                    <a>
                        <div className="content">
                            <div className="info">
                                <h2>迎风来05 我相信你在于我相遇的路上马不停蹄</h2>
                                <div className="personal-info">
                                    <span className="pi-place">美国</span>
                                    <span className="pi-age">1995</span>
                                    <span className="pi-occupation">公共关系</span>
                                    <span className="education">美国高校硕士</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item item4">
                    <a>
                        <div className="content">
                            <div className="info">
                                <h2>迎风来20 我希望有个如你一般的人</h2>
                                <div className="personal-info">
                                    <span className="pi-place">南京</span>
                                    <span className="pi-age">1990</span>
                                    <span className="pi-occupation">企业管理</span>
                                    <span className="education">南京大学硕士</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="item item5">
                    <a>
                        <div className="content">
                            <div className="info">
                                <h2>迎风来16 相纸相依万水千山走遍</h2>
                                <div className="personal-info">
                                    <span className="pi-place">深圳</span>
                                    <span className="pi-age">1983</span>
                                    <span className="pi-occupation">投行</span>
                                    <span className="education">考文垂大学硕士</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>);
    }
}

export default Section;