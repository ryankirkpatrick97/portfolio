import React, {Component} from 'react'
import "./footer.css"


export class Footer extends Component{
    render(){
        return (
            <footer>
                <a href="https://www.linkedin.com/in/ryankirkpatrick97/"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/ryankirkpatrick97"><i className="fa fa-github"></i></a>
            </footer> 
        )
    };
}
export default Footer;