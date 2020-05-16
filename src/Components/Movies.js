import React, {Component} from 'react'
import me from '../images/me.jpg'
import { SRLWrapper } from 'simple-react-lightbox'
const axios = require('axios')

export class Movies extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            info: [],
            Title: "",
            ids: ["tt0061418", "tt0033467", "tt0353496", "tt0137523", "tt0114814", "tt0169547", "tt0144084", "tt0206634", "tt1130884", "tt0092005", "tt0338013",
                "tt0264464", "tt0075314", "tt0066921", "tt1531905", "tt0034583", "tt0099348", "tt0095016"],
            response: [],
        }
    }

    componentDidMount() {
        // this.state.ids.map(x => (
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

    render(){
        // let imgStyle = {
        //     // width: '100%',
        //     max_width: '300px',
        //     display:'block',
        // }
        
        return (
        <div className="posterGrid">
            {this.state.response.map(x => (
                <div className="poster"><img src={x.Poster} alt={x.title}/></div>
            ))}
        </div>
        )
    };
}
export default Movies;
