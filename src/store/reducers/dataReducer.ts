import * as actions from "../actions"


 type InitialStateType = {
    period: object | null ,
}

const initialState : InitialStateType = {
    period: null,
};

export default (state =initialState,action:any) : InitialStateType => {
    switch (action.type) {
        case actions.GET_DATA:
            return {...state,period:action.period}
        default:
            return state
    }
}