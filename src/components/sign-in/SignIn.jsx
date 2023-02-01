import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
const SignIn = () => {
	const [inputValue, setInputValue] = useState({
		email: '',
		password: '',
	});
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(
				inputValue.email,
				inputValue.password
			);
			setInputValue({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};
	const handleChange = e => {
		const { name, value } = e.target;
		setInputValue(prev => {
			return { ...prev, [name]: value };
		});
	};
	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					id="email"
					value={inputValue.email}
					handleChange={handleChange}
					required
					label={'email'}
				/>

				<FormInput
					type="password"
					name="password"
					id="password"
					value={inputValue.password}
					handleChange={handleChange}
					required
					label={'password'}
				/>

				<div className="buttons">
					<CustomButton type="submit">SIGN IN</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						SIGN IN WITH GOOGLE
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
