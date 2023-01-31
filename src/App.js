import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home/HomePage.component';
import Shop from './pages/shop/Shop.component';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { useState, useEffect } from 'react';
import { auth } from './firebase/firebase.utils';

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		console.log('im going to mount');
		let unsubscribeFromAuth = null;
		unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			setCurrentUser(user);
			console.log(user);
		});
		return () => {
			console.log('im going to unmount');
			return unsubscribeFromAuth();
		};
	}, []);
	return (
		<div className="App">
			<Header currentUser={currentUser} />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/shop" element={<Shop />} />
				<Route exact path="/signin" element={<SignInAndSignUp />} />
			</Routes>
		</div>
	);
}

export default App;
