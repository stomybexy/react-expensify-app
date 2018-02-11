import React from 'react';
import { shallow } from 'enzyme';
import ConfirmModal from '../../components/ConfirmModal';

let onCancel, onConfirm, wrapper;

beforeEach(() => {
    onCancel = jest.fn();
    onConfirm = jest.fn();
    wrapper = shallow(
        <ConfirmModal
            onConfirm={onConfirm}
            onCancel={onCancel}
            title="Modal"
            message="Confirm your action ?"
            isOpen={true}
        />
    )
});

test('It should render ConfirmModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('It should cancel confirm on no button click', () => {
    wrapper.find('#no').simulate('click');
    expect(onCancel).toHaveBeenCalled();
});
test('It should cancel confirm on modal dismiss', () => {
    wrapper.find('Modal').props().onRequestClose();
    expect(onCancel).toHaveBeenCalled();
});
test('It should confirm on yes button click', () => {
    wrapper.find('#yes').simulate('click');
    expect(onConfirm).toHaveBeenCalled();
});
