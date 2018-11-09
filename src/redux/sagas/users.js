import axios from 'axios';
import { put, call } from 'redux-saga/effects'; 
import ActionCreators from '../actionCreators';

export function* getUsers(action) {
    const token = localStorage.getItem('token');
    const users = yield axios.get('http://localhost:3001/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    yield put(ActionCreators.getUsersSuccess(users.data));
}

export const getUser = ({ api }) => function* (action) {
    const user = yield call(api.getUser, action.id);
    yield put(ActionCreators.getUserSuccess(user.data));
}

export function* removeUser(action) {
    const token = localStorage.getItem('token');
    yield axios.delete(`http://localhost:3001/users/${action.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    yield put(ActionCreators.removeUserSuccess(action.id))
}

export function* updateUser(action) {
    const token = localStorage.getItem('token');
    const userToSave = {
        ...action.user
    }
    yield axios.patch(`http://localhost:3001/users/${action.user.id}`, userToSave, {
        headers: {
            Authorization: `Bearer ${token}`
        }    
    })
    yield put(ActionCreators.updateUserSuccess(userToSave))
    yield put(ActionCreators.updateUserReset())
}