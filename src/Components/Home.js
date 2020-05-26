import React, {Component} from 'react'
import me from '../images/me.jpg'
import resume from '../images/resume.png'

class Home extends Component {
    render() {
        let imgStyle = {
            width: '100%',
            max_width: '300px'
        }

        return (
            <div className="content">
                <div className="item">
                    <img src={me} alt="Me" style={imgStyle}/>
                </div>
                <div className="item">
                    <a href="https://ryankirkpatrick97.github.io/portfolio/resume.pdf" target="_blank" rel="noopener noreferrer">
                    <img src={resume} alt="My Resume" style={imgStyle}/>
                    </a>
                </div>
            </div>
        );
    }
  }


export default Home;
