import React, { useState } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
const SignUp = () => {
	const [signUpValues, setSignUpValues] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleSubmit = async e => {
		const { email, password, confirmPassword, displayName } = signUpValues;
		e.preventDefault();
		if (password !== confirmPassword) {
			alert('Password does not match');
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			console.log(user);
			await createUserProfileDocument(user, { displayName });
			setSignUpValues({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error(error);
		}
	};
	const handleChange = e => {
		const { name, value } = e.target;
		setSignUpValues(prevState => {
			return {
				...prevState,
				[name]: value,
			};
		});
	};
	return (
		<div className="sign-up">
			<h2 className="title">I do not have a account</h2>
			<span>Sign up with email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					handleChange={handleChange}
					value={signUpValues.displayName}
					type="text"
					required
					name="displayName"
				/>
				<FormInput
					label="email"
					handleChange={handleChange}
					value={signUpValues.email}
					type="email"
					name="email"
					required
				/>
				<FormInput
					label="password"
					handleChange={handleChange}
					value={signUpValues.password}
					type="password"
					name="password"
					required
				/>
				<FormInput
					label="Confirm Password"
					handleChange={handleChange}
					value={signUpValues.confirmPassword}
					type="password"
					name="confirmPassword"
					required
				/>
				<CustomButton>SIGN UP</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
