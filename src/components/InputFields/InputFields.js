import React from 'react';
import styles from './InputFields.module.css';

const InputFields = () => {
	return (
		<div className={styles.inputFieldsWrapper}>
			<form action=''>
				<div className={styles.inputGroup}>
					<div className={styles.inputItem}>
						<label htmlFor='credit-card-number'>Credit card number</label>
						<input
							type='number'
							placeholder='432 5433 9382 1030'
							id='credit-card-number'
						/>
					</div>
					<div className={styles.inputItem}>
						<label htmlFor='expiration-date'>Expiration date</label>
						<input type='date' id='expiration-date' />
					</div>
				</div>
				<div className={styles.inputGroup}>
					<div className={styles.inputItem}>
						<label htmlFor='security-code'>Security Code</label>
						<input type='number' placeholder='420' id='security-code' />
					</div>
					<div className={styles.inputItem}>
						<label htmlFor='postal-code'>Postal Code</label>
						<input type='number' placeholder='1011' id='postal-code' />
					</div>
				</div>

				<div>
					<input type='radio' id='next-time' />
					<label htmlFor='next-time'>
						Use this card for next time purchase
					</label>
				</div>
				<div>
					<button type='submit'>Add Card</button>
				</div>
			</form>
		</div>
	);
};

export default InputFields;
