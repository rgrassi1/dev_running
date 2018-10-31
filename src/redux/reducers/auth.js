import { createReducer } from 'reduxsauce';
import { Types } from '../actionCreators';

export const INITIAL_STATE = {
    isAuthing: false,
    isAuth: false,
    isSigninging: false,
    isSaving: false,
    saved: false,
    user: {},
    error: false,
    errorMessage: ''
}

export const signinRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigninging: true,
        error: false,
        errorMessage: ''
    }
}

export const signinSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigninging: false,
        isAuth: true,
        user: action.user
    }
}

export const signinFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigninging: false,
        error: true,
        errorMessage: action.error
    }
}

export const authRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigninging: true,
        error: false,
        errorMessage: ''
    }
}

export const authSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigninging: false,
        isAuth: true,
        user: action.user
    }
}

export const authFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSigninging: false,
        isAuth: false,
        error: true,
        errorMessage: action.error
    }
}

export const destroyAuthSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isAuth: false,
        user: {}
    }
}

export const updateProfileRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        saved: false,
        error: false,
        errorMessage: ''
    }
}

export const updateProfileSuccess = (state = INITIAL_STATE, action) => {
    const newUser = {
        ...state.user
    }
    Object.keys(action.user).forEach(key => {
        newUser[key] = action.user[key]
    })
    return {
        ...state,
        isSaving: false,
        saved: true,
        user: newUser
    }
}

export const updateProfileFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: true,
        errorMessage: action.error
    }
}

export const updateProfileReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false
    }
}

export const createProfileRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: true,
        saved: false,
        error: false,
        errorMessage: ''
    }
}

export const createProfileSuccess = (state = INITIAL_STATE, action) => {
    const newUser = {
        ...state.user
    }
    Object.keys(action.user).forEach(key => {
        newUser[key] = action.user[key]
    })
    return {
        ...state,
        isSaving: false,
        saved: true,
        user: newUser
    }
}

export const createProfileFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false,
        error: true,
        errorMessage: action.error
    }
}

export const createProfileReset = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isSaving: false,
        saved: false
    }
}


export const HANDLERS = {
    [Types.SIGNIN_REQUEST]: signinRequest,
    [Types.SIGNIN_SUCCESS]: signinSuccess,
    [Types.SIGNIN_FAILURE]: signinFailure,

    [Types.AUTH_REQUEST]: authRequest,
    [Types.AUTH_SUCCESS]: authSuccess,
    [Types.AUTH_FAILURE]: authFailure,

    [Types.DESTROY_AUTH_SUCCESS]: destroyAuthSuccess,
    
    [Types.UPDATE_PROFILE_REQUEST]: updateProfileRequest,
    [Types.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
    [Types.UPDATE_PROFILE_FAILURE]: updateProfileFailure,
    [Types.UPDATE_PROFILE_RESET]: updateProfileReset,

    [Types.CREATE_PROFILE_REQUEST]: createProfileRequest,
    [Types.CREATE_PROFILE_SUCCESS]: createProfileSuccess,
    [Types.CREATE_PROFILE_FAILURE]: createProfileFailure,
    [Types.CREATE_PROFILE_RESET]: createProfileReset
}

export default createReducer(INITIAL_STATE, HANDLERS);