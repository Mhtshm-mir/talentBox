import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
export const courses = createAsyncThunk("courses",async(rejectWithValue)=>{
    const res = await axios.get("https://gleaming-bat-nightshirt.cyclic.app/course");
     try{
        return res.data;
    }
    catch(err){
        return rejectWithValue(error.response.data.message)
    }
})
const initialState = {
    errorMsg:"",
    error:false,
    courses:[]
}


export const  courseSlice = createSlice({
        name:'course',
        initialState,
        reducers:{
            
        },
        extraReducers(builder){
            builder.addCase(courses.fulfilled,(state,action)=>{
                state.courses=action.payload
            })
            builder.addCase(courses.rejected,(state,action)=>{
                state.error=true ,
                state.errorMsg= action.payload
            })
        }
})

export default courseSlice.reducer