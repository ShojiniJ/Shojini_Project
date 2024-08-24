import { REQUEST_DATA,RESPONSE_DATA,ERROR_DATA } from "../Actiontypes/Actiontypes";
const initialstate ={
    loading:true,
    data:[],
    error:''
    
    
}

export const countryreducer =(state=initialstate,action) =>{
    switch(action.type) {
        case REQUEST_DATA :
            return { ...state,loading:true}
        case RESPONSE_DATA :
            return {...state,data:action.payload,loading:false}
        case ERROR_DATA  :
            return{...state,data:[],loading:false,error:action.payload}
        default :
            return state
    }

}