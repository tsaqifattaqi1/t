let fs = require('fs')
let handler = async (m, { conn, isOwner }) => {
  let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
  conn.reply(m.chat, `╭━━•✵ ⃟  ⃟  ⃟✵•━━━━━━━━━━━━━╮\n┃╭┈─────────────⩵꙰ཱི࿐\n┃╰──Pengguna Premium!*──➤ ↶↷*` + `\n` + prem.map(v => isOwner ? '┃*〲 @' + v.replace(/@.+/, '') : '*〲 ' + conn.getName(v)).join`\n` + '\n╰━━━━━━━━━━━━━━━━━━━━╯', m, { contextInfo: { mentionedJid: prem } })
}
handler.help = ['premlist']
handler.tags = ['owner', 'info']
handler.command = /^(listprem|premlist)$/i

module.exports = handler
