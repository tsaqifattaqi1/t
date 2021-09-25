let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
 let id = m.chat
 let src = await (await fetch('https://raw.githubusercontent.com/irwanx/Asupan/master/gabut/gambar18v2.json')).json()
 let json = src[Math.floor(Math.random() * src.length)]
        conn.sendFile(m.chat, json.url, 'anu.jpg', 'Nihh', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['gb18']
handler.tags = ['fun', 'update', 'premium']
handler.command = /^gb18/i
handler.premium = true

module.exports = handler
