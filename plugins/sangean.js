let handler = async (m) => {
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih Jangan Sagne Bang', m, 0, {mimetype: 'video/gif'})
}
handler.help = ['sange']
handler.tags = ['dewasa', 'update']

handler.command = /^(sange)$/i
handler.limit = 3
handler.private = true
handler.register = true
module.exports = handler
