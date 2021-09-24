let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Dongo.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Njir Verify*', 'status@broadcast')
}
handler.customPrefix = /^(dongo|tolol)$/i
handler.command = new RegExp

module.exports = handler
