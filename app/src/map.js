import React,{Component} from 'react';
import Map from "mapmyindia-react";
import{add_pointer} from './redux/ActionCreator';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import './map.css';

export var curr_location=[];
const mapStateToProps=state=>{
    return {
    pings:state.pings,
}}

const mapDispatchToPorps=(dispatch)=>({
    add_pointer:(coord)=>dispatch(add_pointer(coord))
})

class map extends Component{
   click(loc){
       curr_location=[loc.latlng.lat,loc.latlng.lng];
        this.props.add_pointer(loc.latlng);
        setTimeout(()=>{
            this.props.add_pointer(loc.latlng);
        },0);
    }
    render(){
        return(
            <Map className="map"
                markers={this.props.pings}
                zoom={1} 
                onClick={(loc)=>this.click(loc)}
                location={true}
             />
               
        )
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToPorps)(map));