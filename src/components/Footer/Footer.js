import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <button className={styles.completePaymentButton}>Complete Payment</button>
            <h3>Total: N2556.64</h3>
        </div>
    )
}

export default Footer
