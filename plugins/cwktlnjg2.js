let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
 let src = await (await fetch('https://raw.githubusercontent.com/irwanx/Asupan/master/gabut/cewektlnjg2.json')).json()
 let json = src[Math.floor(Math.random() * src.length)]
        await conn.sendFile(m.chat, json.url, 'tobat.jpg', 'Nihh', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}
handler.help = ['cewektelanjang2']
handler.tags = ['dewasa', 'update']
handler.command = /^cewektelanjang2/i
handler.private = true
handler.premium = true

module.exports = handler
