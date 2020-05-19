import React, {Component} from 'react'

export class LightBox extends Component{
    constructor(props){
        super(props);

        this.hideLightbox = this.hideLightbox.bind(this);
    }

    hideLightbox(event){
        if(event.target.id !== "lightbox")
            return;
        // Reenable scroll and remove lightbox
        document.body.style.overflowY = "scroll"
        this.props.changeShowLB(false);
    }


    render(){      
        // Disable Scrolling
        document.body.style.overflow = "hidden"
        
        return (
            <div className="lightbox" id="lightbox" onClick={this.hideLightbox}>
                <div className="LBDisplay" id="LBDisplay">
                    <img className="LBImage" id="overlay_img" src={this.props.image.src} alt={this.props.image.alt}/>
                </div>
            </div>
        )
    };
}
export default LightBox;
