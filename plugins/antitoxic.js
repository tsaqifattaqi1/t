let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Sante.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*SANTAI WOY*', 'status@broadcast')
}
handler.customPrefix = /anjink|anjg|anjing|ajg|anjk|bajingan|bangsat|bgst|kontol|memek|memeq|pepek|meki|titit|titid|tytyt|tytyd|peler|tetek|toket|ngewe|goblok|blok|blog|tolol|idiot|entod|entot|ngentot|ngentod|kentod|kektot|jembut|bego|dajjal|jancok|jancuk|pantek|puki|pukimak|kimak|kampang|lonte|coli|colmek|pelacur|henceut|nigga|fuck|dick|bitch|tits|bastard|asshole/i
handler.command = new RegExp

module.exports = handler