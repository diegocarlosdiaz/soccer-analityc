import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';  // importa el reducer, no el slice

const rootReducer = combineReducers({
  auth: authReducer  // usa 'auth' como key y el reducer importado
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
