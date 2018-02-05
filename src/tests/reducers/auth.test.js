import authReducer from '../../reducers/auth';

test('should set user uid on login', () => {
    const uid = 'SFJKLK4L';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({ uid })
});
test('should remove user uid on logout', () => {
    const uid = 'SFJKLK4L';
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid }, action);
    expect(state).toEqual({})
});