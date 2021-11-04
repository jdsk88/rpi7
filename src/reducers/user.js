import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "../services/authorization/auth";
import { UserServices } from "../services/users/users";

const initialState = {
  isLogged: token.get(),
  userData: [],
};

export const fetchUserById = createAsyncThunk("user/setUserData", (id) => {
  const response = UserServices.getUserBoard(id).then((r) => {
    return r.data;
  });
  return response;
});

const userReducers = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogged: (state) => {
      return { ...state, isLogged: token.get() };
    },
  },

  extraReducers: {
    [fetchUserById.fulfilled.type]: (state, action) => {
      return {
        ...state,
        userData: {
          _id: action.payload._id,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          email: action.payload.email,
          phone: action.payload.phone,
          street: action.payload.companyData[0].address.street,
          zipCode: action.payload.companyData[0].address.zipCode,
          city: action.payload.companyData[0].address.city,
          companyName: action.payload.companyData[0].name,
          vat: action.payload.companyData[0].vat,
          tasks: action.payload.tasks,
          payment: action.payload.payment.status,
          sessionID: action.payload.sessionID,
          dateOfRegistration: action.payload.dateOfRegistration,
          meberStatus: action.payload.meberStatus,
          avatar: action.payload.avatar,
          role: action.payload.role,
        },
      };
    },
  },
});

export const { setLogged, setUserData } = userReducers.actions;

export const selectUserLogged = (state) => state.user.isLogged;
export const userData = (state) => state.user.userData;
export default userReducers.reducer;
