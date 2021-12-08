import React from 'react';
import styles from './Header.module.css';
import { headerData } from './HeaderData';
import Icon from '../Icons/index';
const Header = () => {
	return (
		<div className={styles.headerWrapper}>
			<>
				{headerData.map(data => {
					return <p key={data.id}>{data.name}</p>;
				})}
			</>
			<div className={styles.iconWrapper}>
				<Icon name='profilePic' className={styles.icon} />
			</div>
		</div>
	);
};

export default Header;
