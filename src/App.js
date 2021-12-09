import Header from './components/Header/Header';
import styles from './App.module.css';
import PaymentSection from './components/PaymentSection/PaymentSection';
import PaymentSummary from './components/PaymentSummary/PaymentSummary';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<div className={styles.container}>
			<Header />
			<hr />
			<div className={styles.payment}>
				<PaymentSection />
			</div>
			<hr />
			<PaymentSummary />
			<hr />
			<Footer />
		</div>
	);
};

export default App;
