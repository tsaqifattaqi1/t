const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
    if (!res.ok) throw eror
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, '', '© xsvs', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['wallpaperanime']
handler.tags = ['internet', 'premium']
handler.command = /^(wallpaper|wp)anime$/i
handler.premium = true

module.exports = handler
