import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
    allDoctors: []
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
        case actionTypes.FETCH_ALL_USER_SUCCESS:
            console.log('reducer: ', action.users)
            return {
                ...state,
                users: action.users
            }
        case actionTypes.FETCH_ALL_USER_FAIL:
            return {
                ...state,
                users: []
            }
        case actionTypes.FETCH_TOP_DOCTOR_SUCCESS:
            return {
                ...state,
                topDoctors: action.topDoctors
            }
        case actionTypes.FETCH_TOP_DOCTOR_FAIL:
            return {
                ...state,
                topDoctors: []
            }
        case actionTypes.FETCH_ALL_DOCTOR_SUCCESS:
            return {
                ...state,
                allDoctors: action.allDoctors
            }
        case actionTypes.FETCH_ALL_DOCTOR_FAIL:
            return {
                ...state,
                allDoctors: []
            }
        default:
            return state;
    }
}

export default appReducer;