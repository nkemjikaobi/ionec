import Header from './components/Header/Header';
import styles from './App.module.css';
import PaymentSection from './components/PaymentSection/PaymentSection';

const App = () => {
	return (
		<div className={styles.container}>
			<Header />
			<hr />
			<div className={styles.payment}>
				<PaymentSection />
			</div>
			<hr />
		</div>
	);
};

export default App;
