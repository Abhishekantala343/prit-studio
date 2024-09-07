import { createSlice } from "@reduxjs/toolkit"
import { logoutAction, loginUserByEmailAction, createUserWithEmailAction, getProfileAction, updateAdminDetailsAction, getAdminNotificationAction, addSubAdminAction, listSubAdminAction, deleteAdminAction, changeAdminStatusAction, deleteNotificationAction } from "./middleware"

const INITIAL_STATE = {
  token: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  id: "",
  profile: null,
  notification: [],
  subAdmin: []
}

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, (state) => ({
      ...state,
      token: undefined,
      email: undefined,
      firstName: undefined,
      lastName: undefined,
      phone: undefined,
      id: undefined,
    }))
    builder.addCase(loginUserByEmailAction.fulfilled, (state, { payload }) => ({
      ...state,
      token: payload.data.token,
      email: payload.data.email,
      firstName: payload.data.firstName,
      lastName: payload.data.lastName,
      phone: payload.data.phone,
      id: payload.data.id,
    }))
    builder.addCase(createUserWithEmailAction.fulfilled, (state, { payload }) => ({
      ...state,
      token: payload.data.token,
      email: payload.data.email,
      firstName: payload.data.firstName,
      lastName: payload.data.lastName,
      phone: payload.data.phone,
      id: payload.data.id,
    }))
    builder.addCase(getProfileAction.fulfilled, (state, { payload }) => ({
      ...state,
      profile: payload.data
    }))
    builder.addCase(updateAdminDetailsAction.fulfilled, (state, { payload }) => ({
      ...state,
      email: payload.data.email,
      firstName: payload.data.firstName,
      lastName: payload.data.lastName,
      phone: payload.data.phone,
    }))
    builder.addCase(getAdminNotificationAction.fulfilled, (state, { payload }) => ({
      ...state,
      notification: payload.data
    }))
    builder.addCase(addSubAdminAction.fulfilled, (state, { payload }) => ({
      ...state,
    }))
    builder.addCase(listSubAdminAction.fulfilled, (state, { payload }) => ({
      ...state,
      subAdmin: payload.data,
    }))
    builder.addCase(deleteAdminAction.fulfilled, (state, { payload }) => ({
      ...state,
    }))
    builder.addCase(changeAdminStatusAction.fulfilled, (state, { payload }) => ({
      ...state,
    }))
    builder.addCase(deleteNotificationAction.fulfilled, (state, { payload }) => ({
      ...state,
    }))

  },
})

export const authSelector = (state) => state?.Auth

export default authSlice.reducer