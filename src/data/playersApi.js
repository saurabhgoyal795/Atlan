import player from './player.json'

export function ajaxFindPlayer (query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = player.filter((element, index, array) => {
        return element.A.toLowerCase().includes(query.toLowerCase())
      })
      resolve(results)
    }, 100)
  })
}
