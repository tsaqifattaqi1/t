let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
 let src = await (await fetch('https://raw.githubusercontent.com/irwanx/Asupan/master/gabut/gabut1.json')).json()
 let json = src[Math.floor(Math.random() * src.length)]
        await conn.sendFile(m.chat, json.url, 'gabut.jpg', 'Nihh', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['gabut1']
handler.tags = ['fun', 'update']
handler.command = /^gabut1/i
handler.limit = true

module.exports = handler
