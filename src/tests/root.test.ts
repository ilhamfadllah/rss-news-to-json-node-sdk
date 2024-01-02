import {createRSSNewsToJSONSDKClient} from '../index'

const rssNewsToJSONConfig = () => {
  return createRSSNewsToJSONSDKClient('https://news.google.com/rss/search')
}

describe('[LIST NEWS]', () => {
  test('[200]', async () => {
    const response = await rssNewsToJSONConfig()
      .news()
      .listNews({q: 'bola', hl: 'id', ceid: 'ID'})
    console.log('response:', response)
    expect(response.status).toBe(200)
  })
})
