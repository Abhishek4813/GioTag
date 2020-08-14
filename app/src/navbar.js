import React,{Component} from 'react';
import './navbar.css';

class navbar extends Component{
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
    <span class="material-icons">account_circle</span> 
     <span className="user-text">Abhishek</span>
    </div>
</nav>
        )
    }
}
export default navbar;