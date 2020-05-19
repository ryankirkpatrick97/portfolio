import React, {Component} from 'react'
import me from '../images/me.jpg'
import LightBox from './LightBox.js'

export class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            showLB: false,
            image: {},
        }

        this.changeShowLB = (newShowLB) =>{
            this.setState({
                showLB: newShowLB,
            })
        }

        this.getLightbox = this.getLightbox.bind(this);
    }


    getLightbox(){
        if(this.state.showLB){
            return(<LightBox image={this.state.image} changeShowLB={this.changeShowLB}/>)
        } else {
            return null;
        }
    }

    render(){
        let imgStyle = {
            width: '100%',
            max_width: '300px'
        }
        
        return (
        <div className="content">
            <div className="item">
                <img src={me} alt="Me" style={imgStyle} onClick={(e) => {this.changeShowLB(true); this.setState({image: e.target});}}/>
            </div>
            <div class="item">
                <p>
                    My name is Ryan Kirkpatrick and I am a first year grad student in the CE Master's program.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            {this.getLightbox()}
        </div>
        )
    };
}
export default Home;
