let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
 let id = m.chat
 let src = await (await fetch('https://raw.githubusercontent.com/irwanx/Asupan/master/gabut/pantun2.json')).json()
 let json = src[Math.floor(Math.random() * src.length)]
        await conn.sendButton(m.chat, json, '© xsvsH', 'Pantun 2', '.pantun2', m), { contextInfo: { forwardingScore: 999, isForwarded: true }}
}
handler.help = ['pantun2']
handler.tags = ['fun', 'update']
handler.command = /^pantun2/i
handler.limit = true

module.exports = handler
