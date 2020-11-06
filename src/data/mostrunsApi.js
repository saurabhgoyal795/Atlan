import player from './mostruns.json'

export function ajaxFindMostRun (query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = player.filter((element, index, array) => {
        return element.batsman.toLowerCase().includes(query.toLowerCase())
      })
      resolve(results)
    }, 100)
  })
}
