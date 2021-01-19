import React from 'react';
import Button from './Button';

describe('Test Button component', () => {

	it('Test render Button', function () {
		const button = shallow((<Button>Button</Button>));
		const wrapper = button.find('.btn.btn-default');

		expect(wrapper.length).toBe(1);

		console.log(button.debug())
	});

	it('Test click event', () => {
		const mockCallBack = jest.fn();

		const button = shallow((<Button onClick={mockCallBack}>Button</Button>));
		button.find('button').simulate('click');

		expect(mockCallBack.mock.calls.length).toEqual(1);
	});
});