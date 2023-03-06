import axios, { AxiosInstance } from 'axios';
export default class WebRTC {
  private readonly baseURL = process.env.REACT_WEBRTC_BASE_URL;
  private readonly instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({ baseURL: this.baseURL });
  }
}
