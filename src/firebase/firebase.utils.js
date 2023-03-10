import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyCSTnS9CP9OX6BbVYlzlJGel6fl-UFyfZM',
	authDomain: 'cloth-shop-bc999.firebaseapp.com',
	projectId: 'cloth-shop-bc999',
	storageBucket: 'cloth-shop-bc999.appspot.com',
	messagingSenderId: '779230080178',
	appId: '1:779230080178:web:336a4d1f7ba86dd1c7edab',
	measurementId: 'G-SDGJEYVHSJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (authUser, additionalProp) => {
	if (!authUser) return;
	const userRef = fireStore.doc(`users/${authUser.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = authUser;
		const createdAt = new Date();
		try {
			await userRef.set({ displayName, email, createdAt, ...additionalProp });
		} catch (error) {
			console.log('Something went wrong when creating user', error.message);
		}
	}
	return userRef;
};

export default firebase;
