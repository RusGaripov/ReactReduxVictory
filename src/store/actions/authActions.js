import * as actions from "./index"

export const loginUserAdmin = () => dispatch => {
    dispatch({type: actions.SET_USER,
              user: {"id": 1 , "name":"Roger","email":"abc@email.com",
                      "password": "12345"} })
};


export const loginUser = () => dispatch => {
    dispatch({type: actions.SET_USER,
              user: {"id": 2 , "name":"Rafa","email":"cba@email.com",
                      "password": "54321"}})
};


export const logoutUser = () => {
    return {
        type: actions.LOGOUT_USER
    }
}



