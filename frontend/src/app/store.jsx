import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/Auth/authSlice"
import courseReducer from "../features/Courses/courseSlice"
export const store = configureStore({
    reducer:{
        authentication:authReducer,
        course:courseReducer
    }
})