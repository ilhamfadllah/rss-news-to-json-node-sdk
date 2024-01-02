# 📰 News RSS to JSON SDK

## Introduction

This Node.js project provides an SDK/API for fetching and processing news RSS
feeds. It simplifies the process of retrieving news articles from various
sources in a standardized format.

## Installation

To install the News RSS SDK/API, you can use npm. Open a terminal and run the
following command:

```bash
npm install rss-news-to-json-node-sdk
```

## Sample Usage

```js
const {createRSSNewsToJSONSDKClient} = require('rss-news-to-json-node-sdk')

const init = async () => {
  const newsConfig = () => {
    return createRSSNewsToJSONSDKClient('https://news.google.com/rss')
  }
  const response = await newsConfig()
    .news()
    .listNews({q: 'bola', hl: 'id', ceid: 'ID'})

  console.log('response:', response)
}

init()
```

## Sample Response Data

```bash
data: {
        title: '"bola" - Google Berita',
        description: 'Google Berita',
        webMaster: 'news-webmaster@google.com',
        generator: 'NFE/5.0',
        link: 'https://news.google.com/search?q=bola&hl=id&ceid=ID:id&gl=ID',
        language: 'id',
        copyright: '2024 Google Inc.',
        lastBuildDate: 'Tue, 02 Jan 2024 04:34:00 GMT',
        items: [
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object], [Object], [Object],
          [Object], [Object], [Object], [Object]
        ]
      }
```

## Next To-Do List

- [✅] Implement get news by keyword & others query strings

## 💻 Open Contribution

Welcome contributions from the community!
