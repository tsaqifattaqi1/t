let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak...*')
  let res = `http://zekais-api.herokuapp.com/sbburn?text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `awokawokawok`, m, false)
}
handler.help = ['sbburn'].map(v => v + ' <teks>')
handler.tags = ['sticker', 'update']
handler.command = /^(sbburn)$/i
handler.limit = true
handler.register = true

module.exports = handler
