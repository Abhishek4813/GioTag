import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configureStore';
import './App.css';
import Map from"./map";
import Navbar from './navbar';
import Sidebar from './sidebar';
import Logbar from './logbar';
import Login from './login';

const store= configureStore();

class App extends Component{
  constructor(){
    super();
    this.state={
      status:-1,
    }
  }
  componentDidMount(){
    fetch('/status')
    .then((response)=>response.json())
    .then((data)=>{
      if(data.status==="authenticated"){
        this.setState({
            status:1,
        })
      }
        else{
          this.setState({
            status:0,
          })
        }
    })
  }
  render(){
if(this.state.status===1){
  return (
    <Provider store={store} className="App">
    <Navbar/>
    <div className="map-box">
    <Sidebar/>
    <Map/>
    <Logbar/>
    </div>
    </Provider>
  );
   }
  else if(this.state.status===0){
    return(
    <Provider store={store} className="App">
    <Login/>
    </Provider>);

  }
  else{
    return(
    <Provider store={store} className="App">
    </Provider>);
  }
}}
export default App;
