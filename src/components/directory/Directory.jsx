import React from 'react';
import './directory.styles.scss';
import { sections } from './directory.data';
import MenuItem from '../menu-item/MenuItem';
const Directory = () => {
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

export default Directory;
