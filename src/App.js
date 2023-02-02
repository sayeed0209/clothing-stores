import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home/HomePage.component';
import Shop from './pages/shop/Shop.component';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userAction';
import { connect } from 'react-redux';

function App(state) {
	console.log(state);
	useEffect(() => {
		let unsubscribeFromAuth = null;
		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapshot =>
					state.setCurrentUser({ id: snapshot.id, ...snapshot.data() })
				);
			} else {
				state.setCurrentUser(userAuth);
			}
		});
		return () => unsubscribeFromAuth();
	}, []);

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/shop" element={<Shop />} />
				<Route exact path="/signin" element={<SignInAndSignUp />} />
			</Routes>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
