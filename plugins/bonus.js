const free = 500
const prem = 10000
let handler = async (m, { conn, usedPrefix, isPrems }) => {
  if (db.data.users[m.sender].level < 1) return await conn.sendButton(m.chat, 'naikan level kamu', '© XsvsH', 'Level Up', `${usedPrefix}levelup`, m)
  let time = db.data.users[m.sender].lastclaim + 86400000
  db.data.users[m.sender].exp += isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level
  m.reply(`+${isPrems ? prem * db.data.users[m.sender].level : free * db.data.users[m.sender].level} Rupiah\n\nMayan buat jajan cewek`)
  db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['bonus', 'hadiah']
handler.tags = ['xp', 'premium']
handler.command = /^(bonus|hadiah)$/i
handler.owner = true
handler.mods = true
handler.premium = true
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
