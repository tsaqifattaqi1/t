let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Bot.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Alo Tayang Acu*', 'status@broadcast')
}
handler.customPrefix = /bot|robot/i
handler.command = new RegExp

module.exports = handler
