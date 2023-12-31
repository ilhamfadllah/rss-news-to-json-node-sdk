import createRESTManager from './RESTManager'
import Parser from 'rss-parser'
import {AxiosResponse} from 'axios'

export class NewsManager {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private async callAPI(options: {
    url: string
    method: string
    headers?: any
    data?: any
    params?: any
  }) {
    try {
      const parser = new Parser()

      const api = await createRESTManager(this.baseURL).createAxiosInstance(
        options,
      )
      let response: AxiosResponse = await api.request({
        ...options,
      })

      response = {...response, data: await parser.parseString(response.data)}

      return response
    } catch (error: any) {
      throw new Error(JSON.stringify(error))
    }
  }

  public async listNews(search?: string) {
    return await this.callAPI({
      url: this.baseURL,
      method: 'GET',
      params: {
        search,
      },
    })
  }
}
