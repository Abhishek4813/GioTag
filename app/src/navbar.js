import React,{Component} from 'react';
import './navbar.css';

class navbar extends Component{
    constructor(){
        super();
        this.state={
            name:''
        };
    }
    componentDidMount(){
        fetch('/users/username')
        .then((response)=>response.json())
        .then((data)=>{
            this.setState({
                name:data.name,
            })
        })
    }
    render(){
        return(
            <nav>
<div>
<img src="/logoimg.png" width={"60px"}/>
    <div className="logo">
    GioTag 
    </div>
    </div>
    <div className="user">
    <span className="material-icons">account_circle</span> 
     <span className="user-text">{this.state.name}</span>
    </div>
</nav>
        )
    }
}
export default navbar;