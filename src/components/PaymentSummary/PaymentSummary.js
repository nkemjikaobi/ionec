import React from 'react'
import styles from './PaymentSummary.module.css';

const PaymentSummary = () => {
    return (
			<div className={styles.paymentSummaryWrapper}>
				<div className={styles.subTotalItem}>
					<h4>Subtotal</h4>
					<h5>N2,497.00</h5>
				</div>
				<div className={styles.subTotalItem}>
					<h4>Estimated TAX</h4>
					<h5>N119.64</h5>
				</div>
				<div className={styles.subTotalItem}>
					<h4>
						Promotional Code: <span>Z4KXLM94</span>
					</h4>
					<h5>N119.64</h5>
				</div>
			</div>
		);
}

export default PaymentSummary
