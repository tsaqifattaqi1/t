/*
* Fitur Image To Maps
* Bukan fitur virus!!!
* Hanya work di wa ori , wa gb ngebug gambar nya :v
*/

let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, DevMode }) => {
	try {
        let q = m.quoted ? m.quoted : m 
        let mime = (q.msg || q).mimetype || ''
        if (/image|video/.test(mime)) {
            let img = await q.download()
            if (!img) throw 'Foto/Sticker tidak ditemukan'
            conn.sendMessage(m.chat, {degreesLatitude: 25.21465, degreesLongitude: 49.33476, jpegThumbnail: img, Image: img, caption: "XSVSH NGEBUG:V"}, MessageType.location)
        } 
        else m.reply('Tag foto/videonya!!')
    } catch (e) {
        console.log(e)
        m.reply('Ada yang eror keknya')
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['jadilokasi']
handler.tags = ['tools', 'premium']
handler.command = /^(jadilokasi)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
