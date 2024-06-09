import { createStore } from "redux";


const initialState = {
  isLoading : false,
  users : [],
  error : null
};

const usersReducer = (state=initialState, action) =>{
  switch(action.type){
      case "GET_USERS_REQUEST":
          return {
              ...state,
              isLoading : true
          };
      case "GET_USERS_SUCCESS":
          return {
              ...state,
              isLoading : false,
              users : action.payload
          };
      case "GET_USERS_FAILED":
          return {
              ...state,
              isLoading : false,
              error : action.payload
          };
      default:
          return state;
  };
};


const store = createStore(usersReducer);

export default store;