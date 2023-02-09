import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import userReducer from './user/userReducer';
import { cartReducer } from './cart/cartReducer';
import { directoryReducer } from './directory/directoryReducer';
import { collectionsReducer } from './collections/collectionReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'],
};
const rootReducers = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	collections: collectionsReducer,
});

export default persistReducer(persistConfig, rootReducers);
