import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/HomePage.component';
import Shop from './pages/shop/Shop.component';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/shop" element={<Shop />} />
			</Routes>
		</div>
	);
}

export default App;
