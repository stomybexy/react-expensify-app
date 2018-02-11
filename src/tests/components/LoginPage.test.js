import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startLogin;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin}/>);
});

test('should render correctly LoginPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin with google on google button click', () => {
    wrapper.find('#google').simulate('click');
    expect(startLogin).toHaveBeenLastCalledWith('GOOGLE');
});
test('should call startLogin with github on github button click', () => {
    wrapper.find('#github').simulate('click');
    expect(startLogin).toHaveBeenLastCalledWith('GITHUB');
});