let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
 let src = await (await fetch('https://raw.githubusercontent.com/irwanx/Asupan/master/gabut/cewesmabohay1.json')).json()
 let json = src[Math.floor(Math.random() * src.length)]
        await conn.sendFile(m.chat, json.url, 'bohay.jpg', 'Nihh', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['ceweksmabohay']
handler.tags = ['dewasa', 'update']
handler.command = /^ceweksmabohay/i
handler.private = true
handler.premium = true

module.exports = handler
