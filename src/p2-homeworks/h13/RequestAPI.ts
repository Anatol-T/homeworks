import axios from "axios";

export type ResponseType = {
  errorText: string
  info: string
  yourBody: {success: boolean}
  yourQuery: {}
}
export const RequestAPI = {
  sendRequest (success:boolean) {
    return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test', {success})
  }
}