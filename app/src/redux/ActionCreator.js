import * as ActionType from './ActionType';

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