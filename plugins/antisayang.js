let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let users = participants.map((u) => u.jid);
let zero = fs.readFileSync('./audio/halosyg.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
//conn.fakeReply(m.chat, zero, '0@s.whatsapp.net', '*🔥WOAHHHHH 🔥*', 'status@broadcast')
 contextInfo: {
  mentionedJid: users
        }
}
handler.customPrefix = /sayang|ayang|bebep|dear|beb|bebeb|saayang|syg|syng|aynk|syk|synk|synx|ayanx|ayank/i
handler.command = new RegExp

module.exports = handler
