const fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `uhm.. judul nya apa?\n\ncontoh:\n${usedPrefix + command} akad`
    if (isUrl(text)) throw `uhm.. judul kak bukan pake url\n\ncontoh:\n${usedPrefix + command} handjob`

    let res = await fetch(global.API('raceta', '/api/porn', { search: text }))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let { title, actors, album, img_url, mp4_url, duration } = json.result
    let pesan = `
Judul: ${title}
Pemain: ${actors}
Durasi: ${duration}
© XsvsH
    `.trim()

    conn.sendFile(m.chat, img_url, 'eror.jpg', pesan, m, 0, { thumbnail: await (await fetch(img_url)).buffer() })
    conn.sendFile(m.chat, mp4_url, 'error.mp4', '', m, 0, { asDocument: global.db.data.chats[m.chat].useDocument, mimetype: 'video/gif' })

}
handler.help = ['playb'].map(v => v + ' <judul>')
handler.tags = ['downloader']
handler.command = /^playb$/i
handler.owner = true

module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
