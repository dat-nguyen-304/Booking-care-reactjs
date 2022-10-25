const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',


    //user
    FETCH_ALL_USER_SUCCESS: 'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAIL: 'FETCH_ALL_USER_FAIL',

    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAIL: 'FETCH_GENDER_FAIL',
    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAIL: 'FETCH_POSITION_FAIL',
    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAIL: 'FETCH_ROLE_FAIL',
    FETCH_ALL_TIME_TYPE_SUCCESS: 'FETCH_ALL_TIME_TYPE_SUCCESS',
    FETCH_ALL_TIME_TYPE_FAIL: 'FETCH_ALL_TIME_TYPE_FAIL',

    //doctor
    FETCH_TOP_DOCTOR_SUCCESS: 'FETCH_TOP_DOCTOR_SUCCESS',
    FETCH_TOP_DOCTOR_FAIL: 'FETCH_TOP_DOCTOR_FAIL',
    FETCH_ALL_DOCTOR_SUCCESS: 'FETCH_ALL_DOCTOR_SUCCESS',
    FETCH_ALL_DOCTOR_FAIL: 'FETCH_ALL_DOCTOR_FAIL',

    FETCH_ALL_DOCTOR_INFO_CODE_SUCCESS: 'FETCH_ALL_DOCTOR_INFO_CODE_SUCCESS',
    FETCH_ALL_DOCTOR_INFO_CODE_FAIL: 'FETCH_ALL_DOCTOR_INFO_CODE_FAIL',

    GET_ALL_SPECIALTY_SUCCESS: 'GET_ALL_SPECIALTY_SUCCESS',
    GET_ALL_SPECIALTY_FAIL: 'GET_ALL_SPECIALTY_FAIL',
})

export default actionTypes;