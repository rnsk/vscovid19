import axios from 'axios'

class SheetApi {
  constructor () {
    this.apiBase = 'https://spreadsheets.google.com/feeds/list'
  }

  getData () {
    return axios.get(`${this.apiBase}/1O5hfDv0hmbMQtq8T4102HPkEUs24NQKp6Ps0Y4IVpHI/1/public/values?alt=json`)
      .then((res) => {
        const items = []
        const values = Object.values(res.data.feed.entry)
        values.forEach((value) => {
          const item = {
            最終更新日: value.gsx$最終更新日.$t,
            分野: value.gsx$分野.$t,
            分類: value.gsx$分類.$t,
            名称: value.gsx$名称.$t,
            対象者: value.gsx$対象者.$t,
            対象地域: value.gsx$対象地域.$t,
            内容: value.gsx$内容.$t,
            提供者: value.gsx$提供者.$t,
            問い合わせ先: value.gsx$問い合わせ先.$t,
            url: value.gsx$url.$t,
            開始日: value.gsx$開始日.$t,
            終了日: value.gsx$終了日.$t,
            費用: value.gsx$費用.$t,
            導入支援: value.gsx$導入支援.$t
          }
          items.push(item)
        })
        return items
      })
      .catch(e => ({ error: e }))
  }
}

const sheetApi = new SheetApi()

export default sheetApi
