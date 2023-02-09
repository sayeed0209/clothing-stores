import React from 'react';
import './directory.styles.scss';
// import { sections } from './directory.data';
import MenuItem from '../menu-item/MenuItem';
import { createStructuredSelector } from 'reselect';
import { directorySectionSelector } from '../../redux/directory/directory.selector';
import { connect } from 'react-redux';
const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ id, title, imageUrl, linkUrl, size }) => (
				<MenuItem
					key={id}
					title={title}
					subtitle="Shop Now"
					imageUrl={imageUrl}
					linkUrl={linkUrl}
					size={size}
				/>
			))}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	sections: directorySectionSelector,
});

export default connect(mapStateToProps)(Directory);
