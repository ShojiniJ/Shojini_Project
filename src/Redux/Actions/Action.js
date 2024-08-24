import { USRERNAME,REQUEST_DATA,RESPONSE_DATA,ERROR_DATA } from "../Actiontypes/Actiontypes";
import axios from 'axios';
export const setusername =(username) =>{
    return{
type :USRERNAME,
payload:username
 }
}
export const fetchrequestdata =() =>{
  return{
    type:REQUEST_DATA
  }  
}
export const fetchresponsedata =(data) =>{
    return{
      type:RESPONSE_DATA,
      payload:data
    }  
}
export const fetcherrordata =(error) =>{
    return{
      type:ERROR_DATA,
      payload:error
    }  
}

export const fetchallcountriesdata = () =>{
    
    
     return async (dispatch) => {
       dispatch(fetchrequestdata());
     try{
    
         const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag',
         )
    // console.log(response.data.Data)
    dispatch(fetchresponsedata(response.data));
     }catch(error){
       dispatch(fetcherrordata(error));
     return error
     }
   }
   }