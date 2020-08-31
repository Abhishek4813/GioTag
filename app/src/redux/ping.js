import * as ActionType from './ActionType';
import {curr_location} from '../map';
export var new_location=[];
export const pings=(state=[],action)=>{
    switch(action.type){
        case ActionType.All_Pings:
            if(action.payload.length===undefined){
                state=state.concat(action.payload);
                return state;
            };
            state=action.payload;
            return state;
        case ActionType.My_Pings:
            if(action.payload.length===undefined){
                state=state.concat(action.payload);
                return state;
            };
            state=action.payload;
            return state;
        case ActionType.Add_Pointer:
            if(state.length>=1 && state[state.length-1].title && state[state.length-1].title==="New Tag"){
                state.pop();
            }
            if(state.length>=2 && state[state.length-2].draggable){
                return state;
            }
            new_location=curr_location;
            var temp={
                position:action.payload,
                draggable:true,
                onDragend:e=>{
                    new_location=[e.target._latlng.lat,e.target._latlng.lng];
                }
            }
            state=state.concat(temp);
            return state;
        case ActionType.Mark_Location:
            if(state.length===0){
                window.alert("Add a location to ping....");
                return state;
            }
            if(state[state.length-1].position[0]===undefined){
                window.alert("Add a location to ping....");
                return state;
            }
            if(state.length>=1){
                while (state.length>=1 && state[state.length-1].draggable){
                state.pop()
                }
            }
            var temp={
                position:action.payload,
                title:"New Tag",
                draggable:false,
            }
            state=state.concat(temp);
            return state;
        default:
            return state;
    }
}