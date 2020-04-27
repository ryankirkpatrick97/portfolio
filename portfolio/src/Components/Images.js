import React, {Component} from 'react'
import IMG_0001 from "../images/Cabo/IMG_0001.jpg"
import IMG_0031 from "../images/Cabo/IMG_0031.jpg"
import IMG_0037 from "../images/Cabo/IMG_0037.jpg"
import IMG_0082 from "../images/Cabo/IMG_0082.jpg"
import IMG_0120 from "../images/Cabo/IMG_0120.jpg"
import IMG_8398 from "../images/Cabo/IMG_8398.jpg"
import IMG_9421 from "../images/Cabo/IMG_9421.jpg"
import IMG_9158 from "../images/Cabo/IMG_9158.jpg"
import IMG_9409 from "../images/Cabo/IMG_9409.jpg"
import LRG_DSC01327 from "../images/Cabo/LRG_DSC01327.jpg"
import { SRLWrapper } from 'simple-react-lightbox'

export class Images extends Component{
    render(){
        return (
        <SRLWrapper>
        <div>
            <h1>Cabo Trip Summer 2019</h1>
            <div class="row">
                <div class="column">
                    <img class="mainImgs" src={IMG_0001} alt="Cabo Trip"/>
                    <img class="mainImgs" src={IMG_0031} alt="Cabo Trip"/>
                    <img class="mainImgs" src={IMG_0037} alt="Cabo Trip"/>
                </div>
                <div class="column">
                    <img class="mainImgs" src={IMG_0082} alt="Cabo Trip"/>
                    <img class="mainImgs" src={IMG_0120} alt="Cabo Trip"/>
                    <img class="mainImgs" src={IMG_8398} alt="Cabo Trip"/>
                    <img class="mainImgs" src={IMG_9421} alt="Cabo Trip"/>
                </div>
                <div class="column">
                    <img class="mainImgs" src={IMG_9158} alt="Cabo Trip"/>
                    <img class="mainImgs" src={IMG_9409} alt="Cabo Trip"/>
                    <img class="mainImgs" src={LRG_DSC01327} alt="Cabo Trip"/>
                </div>
            </div>
        </div>
        </SRLWrapper>
        )
    };
}
export default Images;