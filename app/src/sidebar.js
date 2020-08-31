import React,{Component} from 'react';
import "./sidebar.css";
import {marker_thunk,All_pings,My_pings} from "./redux/ActionCreator";
import {new_location} from "./redux/ping";
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {drop_location} from './logbar';

const mapDispatchToProps=(dispatch)=>({
    marker_thunk:(coord)=>dispatch(marker_thunk(coord)),
    All_pings:(data)=>dispatch(All_pings(data)),
    My_pings:(data)=>dispatch(My_pings(data)),
})

class sidebar extends Component{
    markLocation(coord){
        this.props.marker_thunk(coord);
    }
    allPings(){
        fetch("/all/pings")
        .then(response=>response.json())
        .then(data=>{
            this.props.All_pings(data);
            this.props.All_pings({});
        })
    }
    mypings(){
        fetch("/my/pings")
        .then(response=>response.json())
        .then(data=>{
            this.props.My_pings(data);
            this.props.My_pings({});
        })
    }
    unping=()=>{
        fetch('/delete/location',{
            method:'delete',
            body:JSON.stringify({
                title:drop_location,
            }),
            headers:{
                'Content-Type':"application/json",
                'credential':"self-origin",
            }
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.status==="not"){
                window.alert("you can only use unping for your locations !!!.....");
                return;
            }
            this.props.My_pings(data);
            this.props.My_pings({});
            window.alert("Successfully Removed");
            var v=document.getElementsByTagName('li');
            if(v.length>=13){
                for(var j=13;j<v.length;j++){
                    v[j].style.backgroundColor="rgb(56, 56, 78)";
                }                
            }
        })
    }
    render(){
        return(
            <div className="sidebar-container">
                <img src="/decorator.png" width={"75%"} className="decorator"/>
            <ul className="map-links">
               <li onClick={()=>this.mypings()}> MY Pings</li>
                <li onClick={()=>this.allPings()}>All Pings</li>
                <li onClick={this.unping}>Unping</li>
                <a href="/logout">
                <li>Logout</li></a>
                <li className="ping_button" onClick={()=>this.markLocation(new_location)}>Ping</li>
            </ul>
            </div>
        )
    }
}
export default withRouter(connect(null,mapDispatchToProps)(sidebar));