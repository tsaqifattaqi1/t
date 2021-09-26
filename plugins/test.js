const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `uhm.. judul nya apa?\n\ncontoh:\n${usedPrefix + command} blowjob`
    if (isUrl(text)) throw `uhm.. judul kak bukan pake url\n\ncontoh:\n${usedPrefix + command} akad`

    let res = await fetch(global.API('raceta', '/api/porn', { search: text }))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
   let bkp = JSON.parse(JSON.stringify(res.result));
      let  mmq =  bkp[Math.floor(Math.random() * bkp.length)]
       let urll = mmq.url
       let vid = await fetchJson(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${urll}`)
       let vide = await getBuffer(vid.mp4)

    sendMessage(from, vide, video )
}
handler.help = ['playb'].map(v => v + ' <judul>')
handler.tags = ['dewasa']
handler.command = /^playb$/i
handler.owner = true

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
