import { createStore } from "redux";
import datas from '../assets/data.json'


const initialState = {
  isLoading : false,
  users : datas,
  error : null
};

const usersReducer = (state=initialState, action) =>{
  switch (action.type) {
    
    // All actions goes here
    
    default:
      return state;
  }
};


const store = createStore(usersReducer);

export default store;