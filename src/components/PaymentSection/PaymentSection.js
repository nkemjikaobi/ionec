import React from 'react'
import CreditCardDetails from '../CreditCardDetails/CreditCardDetails'
import PaymentInformation from '../PaymentInformation/PaymentInformation'
import styles from '../../components/PaymentSection/PaymentSection.module.css';

const PaymentSection = () => {
    return (
        <div className={styles.paymentSectionWrapper}>
            <PaymentInformation />
            <CreditCardDetails />
        </div>
    )
}

export default PaymentSection
