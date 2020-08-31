import React,{Component} from 'react';
import "./logbar.css";
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

export var drop_location='';
const mapStateToProps=state=>{
    return {
    pings:state.pings,
}}

class logbar extends Component{
    remove_loc(event){
        drop_location=event.target.id;
        event.target.style.backgroundColor="red";
        return;
    }
    render(){
        var data=[];
        if(this.props.pings && this.props.pings.length>=1){
        for(var i=0;i<this.props.pings.length;i+=1){
            if(this.props.pings[i].title && (this.props.pings[i].title).length>=70){
            data.push(
            <li onClick={(event)=>this.remove_loc(event)} id={this.props.pings[i].title}>{(this.props.pings[i].title).slice(71,(this.props.pings[i].title).length-4)}</li>
            )
            }
        }
    }
        return(
            <div className="sidebar-container side-bar-right">
                <div className="ping-log-info">Ping Logs</div>
            <ul className="log-bar">
               {data}
            </ul>
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps,null)(logbar));