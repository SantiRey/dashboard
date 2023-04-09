import { createSlice } from "@reduxjs/toolkit"

export type userStructur={
    userName: string,
    email: string,
    token: string,
    role: string,
}

const userInitialState: userStructur={
    userName:"",
    email:"",
    token:"",
    role:""
}

const userSlice = createSlice({
    name: 'user',
    initialState:userInitialState,
    reducers:{
        login:(state, accion)=>{
            state = accion.payload
        },
        logout:(state)=>{
             // eslint-disable-next-line @typescript-eslint/no-unused-vars
             state = {
                userName:"",
                email:"",
                token:"",
                role:""
            }
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer