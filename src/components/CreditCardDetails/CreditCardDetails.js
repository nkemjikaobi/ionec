import React from 'react';
import styles from './CreditCardDetails.module.css';
import Icon from '../Icons/index';
import { creditCardData } from './CreditCardData';

const CreditCardDetails = () => {
	return (
		<div className={styles.creditCardDetailsWrapper}>
			<div className={styles.iconsWrapper}>
                {creditCardData.map(data => {
                    return (
						<div key={data.id} className={styles.icons}>
                            <Icon name={data.icon} />
                        </div>
                    
					);
				})}
			</div>
		</div>
	);
};

export default CreditCardDetails;
