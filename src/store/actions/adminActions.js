import actionTypes from './actionTypes';
import { getAllCode } from '../../services/userService';


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
            console.log('fetch gender start: ', e);
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
