import React, {Component} from 'react';
import ScrollUpButton from "react-scroll-up-button"

import './App.css'
import './Components/style.css'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Header from './Components/Header'
import TabList from './Components/TabList'


export class App extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 1
    }
    this.changeTab = (id) => {
      this.setState({
        activeTab: id
      })
    }
  }

  render(){
    const tabs = [
      {
        id: 1,
        title: 'Home'
      },
      {
        id: 2,
        title: 'Videos'
      },
      {
        id: 3,
        title: 'Projects'
      },
      {
        id: 4,
        title: 'Feedback'
      }
    ];

    return (
      <body>
      <div className="page">
        <div className="header">
          <Header/>
        </div>
        <div className="nav-bar">
          <TabList 
            tabs={tabs}
            activeTab={this.state.activeTab}
            changeTab={this.changeTab}
          />
        </div>
        <section>
        <div className="body">
          <Body
            activeTab={this.state.activeTab}
          />
        </div>
        </section>
        <div className="footer">
          <Footer/>
        </div>
      </div>
      <ScrollUpButton/>
      </body>
    );
  }
};

export default App;
