let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
 let id = m.chat
 let src = await (await fetch('https://raw.githubusercontent.com/irwanx/Asupan/master/gabut/gabut1.json')).json()
 let json = src[Math.floor(Math.random() * src.length)]
        await conn.sendButton(m.chat, json, '© wtf', 'Gabut 1', '.gabut1', m), { contextInfo: { forwardingScore: 999, isForwarded: true }}
}
handler.help = ['gabut1']
handler.tags = ['fun', 'update']
handler.command = /^gabut1/i
handler.limit = true

module.exports = handler
