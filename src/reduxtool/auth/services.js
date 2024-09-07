import { toast } from "react-toastify"
import axiosInstance, { isAxiosError } from "../../services/api"
import { setUser } from "../../services/token"
import { config } from "../../utils/config"
import { logoutAction } from "./middleware"

export const loginWithEmailAsync = async (loginRequest) => {
  try {
    const response = await axiosInstance.post(`${config.apiURL}admin/login`, loginRequest)

    setUser(response?.data?.data?.token)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const logoutActionAsync = async () => {
  try {
    const response = await axiosInstance.get(`${config.apiURL}admin/logout`)
    setUser(response?.data?.data?.token)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const createUserWithEmailAsync = async (request) => {
  try {
    const response = await axiosInstance.post(`${config.apiURL}admin/create`, request)
    setUser(response?.data?.data?.token)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const getProfileAsync = async () => {
  try {
    const response = await axiosInstance.get(`${config.apiURL}admin/getprofile`)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const updateAdminDetailsAsync = async (request) => {
  try {
    const response = await axiosInstance.post(`${config.apiURL}admin/editprofile`, request)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const getAdminNotificationAsync = async () => {
  try {
    const response = await axiosInstance.get(`admin/getnotification`)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const deleteNotificationAsync = async (request) => {
  try {
    const response = await axiosInstance.post(`admin/deletenotification`, request)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const addSubAdminAsync = async (request) => {
  try {
    const response = await axiosInstance.post(`admin/addsubadmin`, request)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const listSubAdminAsync = async () => {
  try {
    const response = await axiosInstance.get(`admin/listsubadmin`)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}


export const deleteAdminAsync = async (request) => {
  try {
    const response = await axiosInstance.delete(`admin/deleteadmin/${request}`)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const changeAdminStatusAsync = async (request) => {
  try {
    const response = await axiosInstance.get(`admin/changeadminstatus/${request}`)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const getAdminDetailsByIdAsync = async (request,dispatch) => {
  try {
    const response = await axiosInstance.get(`admin/getadmindetailsbyid/${request}`)
    return response
  } catch (err) {
    if(err?.response?.data?.status===401){
      dispatch(logoutAction())
    }
    return isAxiosError(err)
  }
}

export const setAdminPermissionAsync = async (request) => {
  try {
    const response = await axiosInstance.post(`admin/setadminpermission`, request)
    toast.success(response?.data?.message)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}