let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
 let id = m.chat
 let src = await (await fetch('https://raw.githubusercontent.com/irwanx/Asupan/master/gabut/gabut2.json')).json()
 let json = src[Math.floor(Math.random() * src.length)]
        await conn.sendButton(m.chat, json.url, '© xsvsH', 'Gabut 2', '.gabut2', m), { contextInfo: { forwardingScore: 999, isForwarded: true }}
}
handler.help = ['gabut2']
handler.tags = ['fun', 'update']
handler.command = /^gabut2/i
handler.premium = true

module.exports = handler
