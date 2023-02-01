import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home/HomePage.component';
import Shop from './pages/shop/Shop.component';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		console.log('im going to mount');
		let unsubscribeFromAuth = null;
		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			// setCurrentUser(user);
			// console.log(user._delegate.uid);
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapshot => {
					setCurrentUser({ id: snapshot.id, ...snapshot.data() });
				});
			}
			setCurrentUser(userAuth);
		});
		return () => unsubscribeFromAuth();
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
