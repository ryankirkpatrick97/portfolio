import React, {Component} from 'react'
import './images.css'
import me from '../images/me.jpg'

export class Home extends Component{
    render(){
        let imgStyle = {
            width: '100%',
            max_width: '300px'
        }
        return (
        <div className="content">
            <div className="item">
                <img className="mainImgs" src={me} alt="Me" style={imgStyle}/>
            </div>
            <div class="item">
                <p>
                    My name is Ryan Kirkpatrick and I am a first year grad student in the CE Master's program.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
        )
    };
}
export default Home;
