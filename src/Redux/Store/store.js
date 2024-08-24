import { configureStore } from '@reduxjs/toolkit';
import {thunk }from 'redux-thunk';
import rootreducer from '../Compinereducer';
const store = configureStore ({
   reducer:rootreducer 
})
export default store