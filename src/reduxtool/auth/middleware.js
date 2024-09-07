import { createAsyncThunk } from "@reduxjs/toolkit"

import { addSubAdminAsync, changeAdminStatusAsync, createUserWithEmailAsync, deleteAdminAsync, deleteNotificationAsync, getAdminNotificationAsync, getProfileAsync, listSubAdminAsync, loginWithEmailAsync, logoutActionAsync, updateAdminDetailsAsync } from "./services"
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice"
import { defaultMessageObj } from "src/utils/hooks"
import { closeModal } from "../state/stateSlice"


export const logoutAction = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await logoutActionAsync()
      if (response?.data?.isSuccess) {
        dispatch(hideLoader())
        return true
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        }))
      return true
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)

export const loginUserByEmailAction = createAsyncThunk(
  "auth/loginByEmail",
  async (loginRequest, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await loginWithEmailAsync(loginRequest)
      if (response?.data?.status === 401) {
        dispatch(logoutAction())
      }
      if (response?.data?.isSuccess) {
        dispatch(getProfileAction())
        dispatch(hideLoader())
        return response?.data
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        }))
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)

export const listSubAdminAction = createAsyncThunk(
  "auth/listSubAdmin",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await listSubAdminAsync()
      dispatch(hideLoader())
      if (response?.data?.status === 401) {
        dispatch(logoutAction())
      }
      if (response?.data?.isSuccess) {
        return response?.data
      }
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)


export const createUserWithEmailAction = createAsyncThunk(
  "auth/createUserWithEmail",
  async (request, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await createUserWithEmailAsync(request)
      if (response?.data?.status === 401) {
        dispatch(logoutAction())
      }
      if (response?.data?.isSuccess) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          }))
        return response?.data
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        }))
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)

export const getProfileAction = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await getProfileAsync()
      if (response?.data?.status === 401) {
        dispatch(logoutAction())
      }
      if (response?.data?.isSuccess) {
        dispatch(hideLoader())
        return response?.data
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        }))
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)

export const updateAdminDetailsAction = createAsyncThunk(
  "auth/updateAdminDetails",
  async (request, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await updateAdminDetailsAsync(request)
      if (response?.data?.status === 401) {
        dispatch(logoutAction())
      }
      if (response?.data?.isSuccess) {
        dispatch(listSubAdminAction())
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          }))
        return response?.data
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        }))
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)

export const getAdminNotificationAction = createAsyncThunk(
  "auth/getAdminNotification",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await getAdminNotificationAsync()
      dispatch(hideLoader())
      if (response?.data?.status === 401) {
        dispatch(logoutAction())
      }
      if (response?.data?.isSuccess) {
        return response?.data
      }
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)

export const deleteNotificationAction = createAsyncThunk(
  "auth/deleteNotification",
  async (request, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await deleteNotificationAsync(request)
      dispatch(hideLoader())
      dispatch(getAdminNotificationAction())
      if (response?.data?.status === 401) {
        dispatch(logoutAction())
      }
      if (response?.data?.isSuccess) {
        dispatch(listSubAdminAction())
        return response?.data
      }
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)

export const addSubAdminAction = createAsyncThunk(
  "auth/addSubAdmin",
  async (request, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await addSubAdminAsync(request)
      dispatch(hideLoader())
      if (response?.data?.status === 401) {
        dispatch(logoutAction())
      }
      if (response?.data?.isSuccess) {
        dispatch(listSubAdminAction())
        return response?.data
      }
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)

export const deleteAdminAction = createAsyncThunk(
  "auth/deleteAdmin",
  async (request, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await deleteAdminAsync(request)
      dispatch(closeModal())
      dispatch(hideLoader())
      if (response?.data?.status === 401) {
        dispatch(logoutAction())
      }
      if (response?.data?.isSuccess) {
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "success",
            messageText: response?.data?.message,
          }))
        dispatch(listSubAdminAction())
        return response?.data
      }
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)

export const changeAdminStatusAction = createAsyncThunk(
  "auth/changeAdminStatus",
  async (request, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response = await changeAdminStatusAsync(request)
      dispatch(closeModal())
      dispatch(hideLoader())
      if (response?.data?.status === 401) {
        dispatch(logoutAction())
      }
      if (response?.data?.isSuccess) {
        dispatch(listSubAdminAction())
        return response?.data
      }
      return rejectWithValue(response)
    } catch (error) {
      dispatch(hideLoader())
      return rejectWithValue(error)
    }
  }
)