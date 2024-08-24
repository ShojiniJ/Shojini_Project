import { USRERNAME } from "../Actiontypes/Actiontypes";
const initialstate ={
    username :''
}
export const usernamereducer =(state=initialstate ,action) =>{
switch(action.type){
 case USRERNAME:
    return { ...state ,username :action.payload}
    default:
      return state
};

}