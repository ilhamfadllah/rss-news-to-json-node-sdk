import axios from 'axios'

class APIManager {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  public async createAxiosInstance(options: any) {
    const instance = axios.create({
      baseURL: this.baseURL,
      ...options,
    })

    return instance
  }
}

export default function createRESTManager(baseURL: string): APIManager {
  return new APIManager(baseURL)
}
