import * as actions from "../actions"

const initialState= {
    news: null,
    one:null,
};

export default (state=initialState,action) => {
    switch (action.type) {
        case actions.GET_NEWS:
            return {...state,news:action.news}
        case actions.GET_ONE:
            return  {...state, one:action.one}
        case actions.ADD_NEWS:
            return {...state, news:null}
        case actions.APPROVE_ONE:
            return {...state,one:action.one}
        case actions.SEARCH_NEWS:
            return {...state,news:action.news}
        case actions.DELETE_NEWS:
            return {...state, one:null}
        default:
            return state
    }
}