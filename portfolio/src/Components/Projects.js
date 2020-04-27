import React, {Component} from 'react'
import iea_img from "../images/cropped-iea_logo_transparent-1.png"
import film_img from "../images/film.png"

export class Projects extends Component{
    render(){
        return (
        <div>
            <div className="content">
                <div className="item">
                    <a href="https://ieacapstone.wordpress.com/" target="_blank" rel="noopener noreferrer"><img className="project_img" alt="IEA Project" src={iea_img} /></a>
                </div>
                <div className="item">
                    <h1>Intelligent Engineering Assistant Capstone Project 2018-2019</h1>
                </div>
            </div>
            
            <div className="content">
                <div className="item">
                    <a href="https://sites.google.com/view/film-website/home" target="_blank" rel="noopener noreferrer"><img className="project_img" alt="Film Project" src={film_img} /></a>
                </div>
                <div className="item">
                    <h1>Film: Android Application developed to allow users to share their favorite movies</h1>
                </div>
            </div>
        </div>
        )
    };
}
export default Projects;