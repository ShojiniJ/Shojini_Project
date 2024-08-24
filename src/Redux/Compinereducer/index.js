import { combineReducers } from 'redux';
import { usernamereducer } from '../Reducer/usernamereducer';
import { countryreducer } from '../Reducer/countrieslistreducer';

 const rootreducer = combineReducers({
    accountname :usernamereducer,
    countrylist:countryreducer
 })
 export default rootreducer