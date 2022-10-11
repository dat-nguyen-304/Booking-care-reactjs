import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_SUCCESS:
            return {
                ...state,
                genders: action.genders
            }
        case actionTypes.FETCH_GENDER_FAIL:
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            return {
                ...state,
                positions: action.positions
            }
        case actionTypes.FETCH_POSITION_FAIL:
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            return {
                ...state,
                roles: action.roles
            }
        case actionTypes.FETCH_ROLE_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default appReducer;