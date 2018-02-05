import { login, logout } from '../../actions/auth';

test('should setup login action object with provided uid', () => {
    const uid = '12SJKJ1';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
});
test('should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
