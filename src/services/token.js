import { config } from "../utils/config"
import { encryptStorage } from "../utils/secureLocalStorage"

const { useEncryptApplicationStorage } = config

// This function use to get the local refresh token.
export const getLocalRefreshToken = () => {
  const userData = encryptStorage.getItem("user", !useEncryptApplicationStorage)
  if (userData === undefined) return null
  const user = userData
  return user
}

export const getLocalAccessToken = () => {
  const userData = encryptStorage.getItem("user", !useEncryptApplicationStorage)
  if (userData === undefined) return null
  const user = userData
  return user
}

export const updateLocalAccessToken = (accessToken, refreshToken) => {
  const userData = encryptStorage.getItem("user", !useEncryptApplicationStorage)
  if (userData !== undefined) {
    const user = userData
    encryptStorage.setItem("user", JSON.stringify(user), !useEncryptApplicationStorage)
  }
  return null
}

export const getUser = () => {
  const userData = encryptStorage.getItem("user", !useEncryptApplicationStorage)
  if (userData === undefined) return null
  const user = userData
  return user
}

export const setUser = (user) => {
  encryptStorage.setItem("user", user, !useEncryptApplicationStorage)
}

export const removeUser = () => {
  encryptStorage.removeItem("user")
}