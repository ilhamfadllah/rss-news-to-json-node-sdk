import {createRSSNewsToJSONSDKClient} from '../index'

const rssNewsToJSONConfig = () => {
  return createRSSNewsToJSONSDKClient(
    'https://www.voaindonesia.com/api/zmgqoe$moi',
  )
}

describe('[LIST NEWS]', () => {
  test('[200]', async () => {
    const response = await rssNewsToJSONConfig().news().listNews('')

    expect(response.status).toBe(200)
  })
})
