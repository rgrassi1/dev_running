import { createActions } from 'reduxsauce';

export const {
    Types,
    Creators
} = createActions({
    signinRequest: ['email', 'passwd'],
    signinSuccess: ['user'],
    signinFailure: ['error'],

    authRequest: null,
    authSuccess: ['user'],
    authFailure: null,

    getRunsRequest: null,
    getRunsSuccess: ['runs'],
    getRunsFailure: null,

    createRunRequest: ['run'],
    createRunSuccess: ['run'],
    createRunFailure: ['error'],
    createRunResetar: null,

    destroyAuthRequest: null,
    destroyAuthSuccess: null,

    updateProfileRequest: ['user'],
    updateProfileSuccess: ['user'],
    updateProfileFailure: ['error'],
    updateProfileReset: null,

    createProfileRequest: ['user'],
    createProfileSuccess: ['user'],
    createProfileFailure: ['error'],
    createProfileReset: null
})

export default Creators