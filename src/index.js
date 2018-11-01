import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
	tag: 'div',
	className: '',
	tabIndex: 0
};

const propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	className: PropTypes.string,
	tabIndex: PropTypes.number
};

class SelfFocus extends PureComponent {
	componentDidMount() {
		this.focusTag.focus();
	}
	render() {
		let { className, tag: Tag, children, tabIndex = -1, ...rest } = this.props;
		return (
			<Tag
				{...rest}
				ref={focusTag => {
					this.focusTag = focusTag;
				}}
				tabIndex={tabIndex}
				className={className}>
				{children}
			</Tag>
		);
	}
}

SelfFocus.propTypes = propTypes;
SelfFocus.defaultProps = defaultProps;

export default SelfFocus;
