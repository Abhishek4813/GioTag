import * as ActionType from './ActionType';
import { createRoutesFromReactChildren } from 'react-router/lib/RouteUtils';


export const marker_thunk=(coord)=>(dispatch)=>{
    fetch("https://api.opencagedata.com/geocode/v1/json?q="+coord[0].toString()+"+"+coord[1].toString()+"&key=4553a14022dd4fe5a004f0e2616027fc")
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        fetch('/add/location',{
            method:"post",
            body:JSON.stringify(
                {
                 position:coord,
                 draggable:false,
                 title: data.results[0].formatted,  
                }
            ),
            headers:{
                'Content-Type':"Application/json",
                'credentials':"same-0rigin",
            }
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.Status==="success"){
                dispatch(mark_location(coord));
                dispatch(mark_location(coord));
                window.alert("Successfully added the location....");
            }
            else{
                window.alert("Opps this location is Already Marked by you !!!...")
            }
        })

    })
}
export const add_pointer=(coord)=>{
    return{
        type:ActionType.Add_Pointer,
        payload:[coord.lat,coord.lng]
    }
};
export const mark_location=(coord)=>{
    return {
        type:ActionType.Mark_Location,
        payload:[coord[0],coord[1]]
    }
};
export const All_pings=(data)=>{
    return{
        type:ActionType.All_Pings,
        payload:data,
    }
}
export const My_pings=(data)=>{
    return {
        type:ActionType.My_Pings,
        payload:data,
    }
}