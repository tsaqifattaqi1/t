let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
let zero = fs.readFileSync('./audio/mwah.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true, contextInfo: { mentionedJid: users }})
//conn.fakeReply(m.chat, zero, '0@s.whatsapp.net', '*🔥WOAHHHHH 🔥*', 'status@broadcast')
}
handler.customPrefix = /sun|mwah|mmwa|mwa|mwwa|mmmwa|cium|ciuuum|cciiuum|ciumm/i
handler.command = new RegExp

module.exports = handler
