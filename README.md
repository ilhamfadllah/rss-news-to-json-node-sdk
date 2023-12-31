# 📰 News RSS to JSON SDK 📰

## 🗞️ Introduction

This Node.js project provides an SDK/API for fetching and processing news RSS
feeds. It simplifies the process of retrieving news articles from various
sources in a standardized format.

## 🗞️ Installation

To install the News RSS SDK/API, you can use npm. Open a terminal and run the
following command:

```bash
npm install rss-news-to-json-node-sdk
```

## 🗞️ Sample Usage

```js
const {createRSSNewsToJSONSDKClient} = require('rss-news-to-json-node-sdk')

const init = async () => {
  const newsConfig = () => {
    return createRSSNewsToJSONSDKClient(
      'https://www.voaindonesia.com/api/zmgqoe$moi',
    )
  }
  const response = await newsConfig().news().listNews('')

  console.log('response:', response.data)
}

init()
```

## 🗞️ Next To-Do List

- [ ] Implement get news if provider by the news provider

## 💻 Open Contribution

I welcome contributions from the community!
