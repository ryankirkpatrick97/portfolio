import React, { Component} from 'react';
import Home from './Home.js'
import Videos from './Videos.js'
import Projects from './Projects.js'
import Feedback from './Feedback.js'

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if(activeTab === 1)
            return <Home/>
        else if(activeTab === 2){
            return <Videos/>
        }
        else if(activeTab === 3){
            return <Projects/>
        }  
        else if(activeTab === 4){
            return <Feedback/>
        }  
    }

    render() {
        return (
            this.displayContent(this.props.activeTab)
        )
    }
}
export default Body;