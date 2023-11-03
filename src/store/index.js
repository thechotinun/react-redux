import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './slice/about';

export default configureStore({
  reducer: {
    about: aboutReducer
  }
});
