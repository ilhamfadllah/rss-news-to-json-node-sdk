import {NewsManager} from './utils/NewsManager'
import {AxiosResponse} from 'axios'

class RSSNewsToJSON {
  private baseURL: string
  NewsManagerInstance: any

  constructor(baseURL: string) {
    this.baseURL = baseURL
    this.NewsManagerInstance = new NewsManager(this.baseURL)
  }

  news(): {listNews: (search?: string) => AxiosResponse<string>} {
    return this.NewsManagerInstance
  }
}

export function createRSSNewsToJSONSDKClient(baseURL: string): RSSNewsToJSON {
  return new RSSNewsToJSON(baseURL)
}
