let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, participants }) => {
let users = participants.map((u) => u.jid);
let zero = fs.readFileSync('./audio/mwah.mp3')
conn.sendMessage(m.chat, zero, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true}, { 
key: {
fromMe: false,
participant: '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
contactMessage: {
displayName: this.getName(user),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;WA;;;\nFN:WA\nTEL;type=CELL;type=VOICE;waid=${user.split('@')[0]}:${user.split('@')[0]}\nEND:VCARD`
}
}
})
//conn.fakeReply(m.chat, zero, '0@s.whatsapp.net', '*🔥WOAHHHHH 🔥*', 'status@broadcast')
}

handler.customPrefix = /^(sun|cium|mwah|mmwah)?$/i
handler.command = new RegExp

module.exports = handler
