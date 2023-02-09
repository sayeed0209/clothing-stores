import './App.css';
import HomePage from './pages/home/HomePage.component';
import Shop from './pages/shop/Shop.component';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userAction';
import { connect } from 'react-redux';
import Checkout from './components/checkout/Checkout';
import CollectionPage from './pages/collection/Collection.component';

function App(state) {
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
				<Route path="shop">
					<Route index element={<Shop />} />
					<Route path=":collectionID" element={<CollectionPage />} />
				</Route>
				<Route
					exact
					path="/signin"
					element={
						state.currentUser ? (
							<Navigate to="/" replace />
						) : (
							<SignInAndSignUp />
						)
					}
				/>
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
		</div>
	);
}
const mapStateToProps = state => {
	return {
		currentUser: state.user.currentUser,
	};
};
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
