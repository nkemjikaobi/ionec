import React from 'react'
import masterCard from "../../assets/master.jpeg"
import styles from "./PaymentInformation.module.css"

const PaymentInformation = () => {
    return (
			<div className={styles.paymentInformationWrapper}>
				<h3>Payment Information</h3>
				<p>Choose your method of payment</p>
				<img src={masterCard} alt="master card"/>
			</div>
		);
}

export default PaymentInformation
