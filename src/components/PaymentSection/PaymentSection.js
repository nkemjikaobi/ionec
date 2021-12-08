import React from 'react'
import PaymentInformation from '../PaymentInformation/PaymentInformation'
import styles from "./paymentSection.module.css"

const PaymentSection = () => {
    return (
        <div className={styles.paymentSectionWrapper}>
            <PaymentInformation />
        </div>
    )
}

export default PaymentSection
