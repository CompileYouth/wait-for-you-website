import './App.css';

import React, { Component } from 'react';
import Header from './components/Header/Header.jsx';
import Section from './components/Section/Section.jsx';

class App extends Component {
    render() {
        return (<div className="App" >
            <Header />
            <Section />
        </div>);
    }
}

export default App;