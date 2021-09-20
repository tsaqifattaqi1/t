const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `https://api.dhamzxploit.my.id/api/canvas/wanted?url=${url}`
  let stiker = await sticker(null, wanted, 'IG', '@irwan_x_yans')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('tag gambarnya bodoh')
  }
}
handler.help = ['wanted']
handler.tags = ['sticker']
handler.command = /^wanted$/i

handler.mods = false
handler.premium = true


handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
