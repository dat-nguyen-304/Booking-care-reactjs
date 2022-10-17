import actionTypes from './actionTypes';
import { getAllCode, getAllUsers, getTopDoctorHome, getAllDoctors } from '../../services/userService';


//fetch gender
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCode('GENDER');
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.allCode));
            } else {
                dispatch(fetchGenderFail());
            }
        } catch (e) {
            dispatch(fetchGenderFail());
            console.log('fetch gender fail: ', e);
        }
    }
}

export const fetchGenderSuccess = (genders) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    genders

})

export const fetchGenderFail = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})

//fetch position

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        // console.log('check getState: ', getState());
        try {
            let res = await getAllCode('POSITION');
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.allCode));
            } else {
                dispatch(fetchPositionFail());
            }
        } catch (e) {
            dispatch(fetchPositionFail());
            console.log('fetch position fail: ', e);
        }
    }
}

export const fetchPositionSuccess = (positions) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    positions

})

export const fetchPositionFail = () => ({
    type: actionTypes.FETCH_POSITION_FAIL
})

//fetch role
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        // console.log('check getState: ', getState());
        try {
            let res = await getAllCode('ROLE');
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.allCode));
            } else {
                dispatch(fetchRoleFail());
            }
        } catch (e) {
            dispatch(fetchRoleFail());
            console.log('fetch role fail: ', e);
        }
    }
}

export const fetchRoleSuccess = (roles) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    roles

})

export const fetchRoleFail = () => ({
    type: actionTypes.FETCH_ROLE_FAIL
})

// fetch time type
export const fetchAllTimeTypeStart = () => {
    return async (dispatch, getState) => {
        // console.log('check getState: ', getState());
        try {
            let res = await getAllCode('TIME');
            if (res && res.errCode === 0) {
                dispatch(fetchAllTimeTypeSuccess(res.allCode));
            } else {
                dispatch(fetchAllTimeTypeFail());
            }
        } catch (e) {
            dispatch(fetchRoleFail());
            console.log('fetch role fail: ', e);
        }
    }
}

export const fetchAllTimeTypeSuccess = (allTimeTypes) => ({
    type: actionTypes.FETCH_ALL_TIME_TYPE_SUCCESS,
    allTimeTypes,

})

export const fetchAllTimeTypeFail = () => ({
    type: actionTypes.FETCH_ALL_TIME_TYPE_FAIL
})

//fetch all user
export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');
            let res1 = await getTopDoctorHome(3);
            console.log('check doctor: ', res1);
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users));
            } else {
                dispatch(fetchAllUserFail());
            }
        } catch (e) {
            dispatch(fetchAllUserFail());
        }
    }
}

export const fetchAllUserSuccess = (users) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: users.reverse()
})

export const fetchAllUserFail = () => ({
    type: actionTypes.FETCH_ALL_USER_FAIL
})

//fetch top doctor
export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHome(7);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                    topDoctors: res.topDoctors
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_FAIL,
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTOR_FAIL,
            })
        }
    }
}

export const fetchAllDoctorStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
                    allDoctors: res.allDoctors
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_FAIL,
                })
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTOR_FAIL,
            })
        }
    }
}