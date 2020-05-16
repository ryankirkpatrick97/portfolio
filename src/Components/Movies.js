import React, {Component} from 'react'
const axios = require('axios')

export class Movies extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            ids: ["tt0061418", "tt0033467", "tt0068646", "tt0137523",
                "tt0114814", "tt0169547", "tt0144084", "tt0206634", "tt1130884", "tt0092005", "tt0338013",
                "tt0264464", "tt0075314", "tt0066921", "tt0432283", "tt0034583", "tt0099348", "tt0095016"],
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
                    Plot: data.Plot,
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
        // Reenable scroll and remove lightbox
        document.body.style.overflowY = "scroll"
        lBox.style.display = "none";
    }

    displayLightBox(movieInfo){
        var lBox = document.getElementById("lightbox");
        var divTitle = document.getElementById("LBPosterTitle");
        var divDirector = document.getElementById("LBPosterDirector");
        var divRating = document.getElementById("LBPosterRating");
        var divPlot = document.getElementById("LBPosterPlot");
        var overlayImg = document.getElementById("overlay_img");

        // Disable Scrolling
        document.body.style.overflow = "hidden"
        
        // Display lightbox
        lBox.style.display = "inline-block";
        
        // Change Image
        overlayImg.src = movieInfo.Poster;
        overlayImg.alt = movieInfo.Title;
        
        // Fill out movies info
        divTitle.textContent = movieInfo.Title;
        divDirector.textContent = "Directed by " + movieInfo.Director;
        divRating.textContent = "IMDB Rating: " + movieInfo.Rating + "/10";
        divPlot.textContent = movieInfo.Plot;

        // Set rating's color based on rating
        if (parseFloat(movieInfo.Rating) >= 7.0)
            divRating.style.color = "green";
        else
            divRating.style.color = "red";

    }

    render(){        
        return (
        <div>
            <div className="posterGrid">
                {this.state.response.map(x => (
                    <div className="poster"><img className="posterImg" src={x.Poster} alt={x.Title} onClick={() => this.displayLightBox(x)}/></div>
                ))}
            </div>
            <div className="lightbox" id="lightbox" style={{display: this.state.lbDisplay}} onClick={this.hideLightbox}>
                <div className="LBDisplay" id="LBDisplay">
                    <img className="LBImage" id="overlay_img" alt="overlay"/>
                    <div className="LBInfo" id="LBInfo">
                        <div id="LBPosterTitle"/>
                        <div id="LBPosterDirector"/>
                        <div id="LBPosterRating"/>
                        <div id="LBPosterPlot"/>
                    </div>
                </div>
            </div>
        </div>
        )
    };
}
export default Movies;
