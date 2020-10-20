import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';


//Cercle englobant l'oignon où les slices sont disponibles
export default configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },
});
