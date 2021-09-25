let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
 let src = await (await fetch('https://raw.githubusercontent.com/irwanx/Asupan/master/cecan/japan.json')).json()
 let json = src[Math.floor(Math.random() * src.length)]
        await conn.sendFile(m.chat, json.url, 'kuntul.jpg', 'Nihh', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['cewekjapan']
handler.tags = ['fun', 'update']
handler.command = /^cewekjapan/i
handler.private = true
handler.premium = true

module.exports = handler
