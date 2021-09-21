let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let zero = fs.readFileSync('./audio/kangen.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
//conn.fakeReply(m.chat, zero, '0@s.whatsapp.net', '*🔥WOAHHHHH 🔥*', 'status@broadcast')
}

handler.customPrefix = /kangen|tangen|kaaangen|kaangen|kange/i
handler.command = new RegExp

module.exports = handler
