import React, {Component} from 'react'
import me from '../images/me.jpg'
import resume from '../images/resume.png'

class Home extends Component {
    render() {

        return (
            <div className="content">
                <div className="item">
                    <img src={me} alt="Me" style={{cursor: "auto"}}/>
                </div>
                <div className="item">
                    <a href="https://ryankirkpatrick97.github.io/portfolio/RyanKirkpatrickResume.pdf" target="_blank" rel="noopener noreferrer">
                    <img src={resume} alt="My Resume"/>
                    </a>
                </div>
            </div>
        );
    }
  }


export default Home;
