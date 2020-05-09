import React, {Component} from 'react'
import config from '../config.js'
const firebase = require('firebase')

export class FeedbackResponse extends Component{
    constructor(props) {
        super(props)
        this.state = {response: []}
    }


    componentDidMount(){
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
        }
        let ref = firebase.database().ref("response")
        ref.on('value', snapshot => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items) {
              newState.push({
                id: item,
                name: items[item].name,
                description: items[item].description,
                message: items[item].message,
                display: items[item].display,
                email: items[item].email,
                time: items[item].time,
              });
            }

            this.setState({
              response: newState
            });

          });
    };

    componentDidUpdate(prevProps, prevState, snapshot){
        //only call set state here if it is wrapped in a condition
        //if you initialize this.state.shouldUpdate and have not changed it yet then this will not run
        if(this.state.shouldUpdate !== prevState.shouldUpdate){
            //same code as above to retrieve the data 
        }
    }

    render(){        
        return (
            <div className="FirebaseScroll">
            <ul>
                {this.state.response.slice(0).reverse().map(item => (
                    <li className="FeedbackItem">
                        <div>{item.name}</div>
                        <div>{item.description}</div>
                        <div>{item.message}</div>
                        <div>{item.email}</div>
                        <div>{item.time}</div>
                    </li>
                ))}
            </ul>
            </div>
        )
    };
}
export default FeedbackResponse;
