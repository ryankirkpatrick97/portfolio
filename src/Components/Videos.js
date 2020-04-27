import React, {Component} from 'react'

export class Videos extends Component{
    render(){
        return (
        <div>
            <div><h1>Capstone Demo: 2018-2019</h1></div>
            <div className="container">
                <iframe title="Capstone" class="video" src="https://www.youtube.com/embed/XMk__Djtibg?wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div><h1>ECE 153 Project</h1></div>
            <div className="container">
                <iframe title="ECE153" class="video" src="https://www.youtube.com/embed/9jjcRcZ2lSg?wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div><h1>ECE179D Robotics Project 1</h1></div>
            <div className="container">
                <iframe title="Robotics 1" class="video" src="https://www.youtube.com/embed/fQDsw4yPw_c?wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div><h1>ECE179D Robotics Project 2</h1></div>
            <div className="container">
                <iframe title="Robotics 2" class="video" src="https://www.youtube.com/embed/v-9yMAVkSok?wmode=opaque" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        )
    };
}
export default Videos;