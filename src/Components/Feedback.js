import React, {Component} from 'react';
import FeedbackInput from './FeedbackInput';
import FeedbackResponse from './FeedbackResponse';

export class Feedback extends Component{
    render(){        
        return (
        <div className="content">
            <div className="item">
                <FeedbackInput/>
            </div>
            <div className="item">
                <FeedbackResponse/>
            </div>
        </div>
        )
    };
}
export default Feedback;
