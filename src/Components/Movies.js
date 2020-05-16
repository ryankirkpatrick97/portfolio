import React, {Component} from 'react'
import me from '../images/me.jpg'
import { SRLWrapper } from 'simple-react-lightbox'
const axios = require('axios')

export class Movies extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            ids: ["tt0061418", "tt0033467", "tt0353496", "tt0137523", "tt0114814", "tt0169547", "tt0144084", "tt0206634", "tt1130884", "tt0092005", "tt0338013",
                "tt0264464", "tt0075314", "tt0066921", "tt1531905", "tt0034583", "tt0099348", "tt0095016"],
            response: [],
        }

        this.displayLightBox = this.displayLightBox.bind(this);
        this.hideLightbox = this.hideLightbox.bind(this);
    }

    componentDidMount() {

        this.state.ids.map(id => (
        axios.get('http://www.omdbapi.com/?apikey=d0b4efe6&i=' + id)
            .then(({data}) => {
                let newState = this.state.response;
                newState.push({
                    Poster: data.Poster,
                    Title: data.Title,
                    Director: data.Director,
                    Rating:data.imdbRating,
                })
                this.setState({
                    response: newState,
                })
            })
        ))
      }


    hideLightbox(event){
        var lBox = document.getElementById("lightbox");
        if(event.target.id !== "lightbox")
            return;
        // Remove modal
        lBox.style.display = "none";
    }

    displayLightBox(movieInfo){
        var lBox = document.getElementById("lightbox");
        var lBoxInfo = document.getElementById("LBInfo")
        var overlayImg = document.getElementById("overlay_img");

         
        lBox.style.display = "inline-block";
        overlayImg.src = movieInfo.Poster;
    }

    render(){        
        return (
        <div>
            <div className="posterGrid">
                {this.state.response.map(x => (
                    <div className="poster"><img src={x.Poster} alt={x.Title} onClick={() => this.displayLightBox(x)}/></div>
                ))}
            </div>
            <div className="lightbox" id="lightbox" style={{display: this.state.lbDisplay}} onClick={this.hideLightbox}>
                <div className="LBInfo" id="LBInfo">
                    <img class="LBImage" id="overlay_img"/>
                </div>
            </div>
        </div>
        )
    };
}
export default Movies;
