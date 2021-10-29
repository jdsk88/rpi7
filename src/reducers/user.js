import { createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../services/authorization/auth";


const initialState = {
  isLogged: AuthService.getToken(),
  userData: { _id: "", first_name: "", last_name: "", email: "" },
};

export const userReducers = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogged: (state) => {
      return { ...state, isLogged: AuthService.getToken() };
    },
    setUserData: (state, action) => {
      return {
        ...state,
        userData: {
          _id: action.payload._id,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          email: action.payload.email,
        },
      };
    },
  },
});

export const { setLogged, setUserData } = userReducers.actions;

export const selectUserLogged = (state) => state.user.isLogged;
export const selectUserData = (state) => state.user.userData;

export default userReducers.reducer;
