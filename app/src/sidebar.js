import React,{Component} from 'react';
import "./sidebar.css";
import {mark_location} from "./redux/ActionCreator";
import {new_location} from "./redux/ping";
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

const mapDispatchToProps=(dispatch)=>({
    mark_location:(coord)=>dispatch(mark_location(coord))
})

class sidebar extends Component{
    markLocation(coord){
        this.props.mark_location(coord);
        setTimeout(()=>{
            this.props.mark_location([]);
        },0);
    }
    render(){
        return(
            <div className="sidebar-container">
                <img src="/decorator.png" width={"75%"} className="decorator"/>
            <ul className="map-links">
               <li> MY Pings</li>
                <li>All Pings</li>
                <li>Unping</li>
                <li>Logout</li>
                <li className="ping_button" onClick={()=>this.markLocation(new_location)}>Ping</li>
            </ul>
            </div>
        )
    }
}
export default withRouter(connect(null,mapDispatchToProps)(sidebar));