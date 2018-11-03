import SelfFocus from '../src/index';
import React from 'react';

describe('check isElectron detection to be correct', () => {
	it('should render without crashing', () => {
		const wrapper = mount(<SelfFocus />);
		expect(wrapper.children().length).toEqual(1);
		expect(wrapper.find('div').length).toEqual(1);
	});

	it('should render as element with provided tag', () => {
		const wrapper = mount(<SelfFocus tag="p" />);
		expect(wrapper.children().length).toEqual(1);
		expect(wrapper.find('div').length).toEqual(0);
		expect(wrapper.find('p').length).toEqual(1);
	});

	it('should provide default tabIndex for focusing', () => {
		const wrapper = mount(<SelfFocus />);
		expect(wrapper.children().length).toEqual(1);
		expect(wrapper.find('div').prop('tabIndex')).toEqual(0);
	});

	it('should render using tabIndex as per prop', () => {
		const wrapper = mount(<SelfFocus tabIndex={45} />);
		expect(wrapper.children().length).toEqual(1);
		expect(wrapper.find('div').prop('tabIndex')).toEqual(45);
	});

	it('should render SelfFocus with additional classnames', () => {
		const wrapper = mount(<SelfFocus className="class-name1 class-name2" />);
		expect(wrapper.find('div').hasClass('class-name1')).toBe(true);
		expect(wrapper.find('div').hasClass('class-name2')).toBe(true);
	});

	it('should render children of node', () => {
		const wrapper = mount(
			<SelfFocus tag="div">
				<p>some nest p</p>
			</SelfFocus>
		);
		expect(wrapper.children().length).toEqual(1);
		expect(wrapper.find('div').children().length).toBe(1);
		expect(wrapper.find('div p').length).toBe(1);
		expect(wrapper.find('div p').text()).toBe('some nest p');
	});
});
