import axios from 'axios';

const API_URL = 'https://test-app-backend-pi68.onrender.com/users';

export const getAllUsers = (dispatch) => {
    dispatch({
        type: "GET_USERS_REQUEST"
    });
    axios.get(API_URL)
        .then((res) => {
          console.table(res.data.users);
            dispatch({
                type: "GET_USERS_SUCCESS",
                payload: res.data.users
            });
        })
        .catch((err) => {
            dispatch({
                type: "GET_USERS_FAILED",
                payload: err.message
            });
        });
};