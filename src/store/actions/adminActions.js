import actionTypes from './actionTypes';
import { getAllCode } from '../../services/userService';

//fetch gender
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        // console.log('check getState: ', getState());
        try {
            let res = await getAllCode('GENDER');
            console.log(res);
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
            console.log(res);
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
            console.log(res);
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