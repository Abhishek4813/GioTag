import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './redux/configureStore';
import './App.css';
import Map from"./map";
import Navbar from './navbar';
import Sidebar from './sidebar';
import Logbar from './logbar';

const store= configureStore();
class App extends Component{
  render(){
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
}
export default App;
