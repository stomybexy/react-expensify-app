import React from 'react';
import { shallow } from 'enzyme';
import ConfirmButton from '../../components/ConfirmButton';

let buttonText, onConfirm, wrapper;

beforeEach(() => {
    onConfirm = jest.fn();
    buttonText = 'Remove';
    wrapper = shallow(
        <ConfirmButton
            onConfirm={onConfirm}
            className="button button--secondary"
            confirmTitle="Confirm removal"
            confirmMessage="Remove this item ?"
        >
            {buttonText}
        </ConfirmButton>
    )
});

test('should render ConfirmButton correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('It should request confirm with modal on button click', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.state().modalOpen).toBe(true);
});

test('It should close the modal on cancel and not execute action', () => {
    wrapper.find('ConfirmModal').props().onCancel();
    expect(wrapper.state().modalOpen).toBe(false);
    expect(onConfirm).toHaveBeenCalledTimes(0);
});

test('It should close the modal and execute action on confirm', () => {
    wrapper.find('ConfirmModal').props().onConfirm();
    expect(wrapper.state().modalOpen).toBe(false);
    expect(onConfirm).toHaveBeenCalledTimes(1);
});