import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: [],
    users: [],
    topDoctors: [],
    allDoctor: [],
    allPrice: [],
    allPayment: [],
    allProvince: [],
    allTimeTypes: [],
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
                allDoctor: action.allDoctor
            }
        case actionTypes.FETCH_ALL_DOCTOR_FAIL:
            return {
                ...state,
                allDoctor: []
            }
        case actionTypes.FETCH_ALL_TIME_TYPE_SUCCESS:
            return {
                ...state,
                allTimeTypes: action.allTimeTypes
            }
        case actionTypes.FETCH_ALL_TIME_TYPE_FAIL:
            return {
                ...state,
                allTimeTypes: []
            }
        case actionTypes.FETCH_ALL_DOCTOR_INFO_CODE_SUCCESS:
            console.log('đã vào fetch all doctor info success: ', action.allPrice);
            return {
                ...state,
                allPrice: action.allPrice,
                allProvince: action.allProvince,
                allPayment: action.allPayment,
            }
        case actionTypes.FETCH_ALL_DOCTOR_INFO_CODE_FAIL:
            return {
                ...state,
                allPrice: [],
                allProvince: [],
                allPayment: [],
            }
        default:
            return state;
    }


}

export default appReducer;