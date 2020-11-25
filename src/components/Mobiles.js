import React, { Component } from 'react'
import Card from './Card';
import './Mobiles.css';
import Iphone6s from 'reliancemobile/src/images/Iphone6s.jpg';
import OnePlus9 from 'reliancemobile/src/images/OnePlus9.jpg';
import Oppo from 'reliancemobile/src/images/Oppo.jpg';
import Realme7 from 'reliancemobile/src/images/Realme7.jpg';
import Redmi9 from 'reliancemobile/src/images/Redmi9.jpg';
import SamsungM51 from 'reliancemobile/src/images/SamsungM51.jpg';


export default class Mobiles extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            displayCategories : true,
            displayMobiles: false,
            mobiles: ""
        }
    }

    render() {
        return (
            <div className="container">
                <div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <h1>Mobile Hub</h1>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row"> 
                <Card itemName={Iphone6s} searchItem="Iphone6s" onImageClick={this.onImageClick}/>
                <Card itemName={OnePlus9} searchItem="OnePlus9" onImageClick={this.onImageClick}/>
                <Card itemName={Oppo} searchItem="Oppo" onImageClick={this.onImageClick}/>
                
            </div>
            <div className="row">
                <Card itemName={Realme7} searchItem="Realme7" onImageClick={this.onImageClick}/>
                <Card itemName={Redmi9} searchItem="Redmi9" onImageClick={this.onImageClick}/>
                <Card itemName={SamsungM51} searchItem="SamsungM51" onImageClick={this.onImageClick}/>
                
            </div> 
            </div> 
        </div>
        )
    }
}