let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
let users = participants.map((u) => u.jid);
let zero = fs.readFileSync('./audio/halosyg.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true, contextInfo: { mentionedJid: users }})
//conn.fakeReply(m.chat, zero, '0@s.whatsapp.net', '*🔥WOAHHHHH 🔥*', 'status@broadcast')
}
handler.customPrefix = /(sayang|ayang|bebep|dear|beb|bebeb|saayang|syg|syng|aynk|syk|synk|synx|ayanx|ayank)?$/i //biar ga nyampur
handler.command = new RegExp

module.exports = handler
