import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
const token = sessionStorage.getItem("token")
const name = sessionStorage.getItem("name")
let loggedin=false
if(token){
    loggedin =true
}
const initialState = {
    isLoggedin:loggedin,
    token:token || "",
    message:"",
    name:name || ""
}

export const authentication = createAsyncThunk('/signin',async(user,{rejectWithValue})=>{
    const {name,email,password} = user
    try{
        const res = await axios.post("https://gleaming-bat-nightshirt.cyclic.app/signin", {name, email, password });
        return res.data;
    }
    catch(err){
        return rejectWithValue(err.response.data.message)
    }
   
})

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state)=>{
            state.isLoggedin=false,
            state.token=""
            state.message=""
            state.name=""
        },
        googleLogin:(state,action)=>{
            state.token=action.payload.token,
            state.isLoggedin=true
            state.name= action.payload.name
        }


    },
    extraReducers(builder){
        builder.addCase(authentication.fulfilled,(state,action)=>{
            state.isLoggedin=true,
            state.token=action.payload.token
            state.message= action.payload.message
          state.name= action.payload.name
    
        })
        .addCase(authentication.rejected,(state,action)=>{
            state.isLoggedin=false,
            state.message= action.payload
        })
    }

})
export const  {logout,googleLogin} = authSlice.actions

export default authSlice.reducer