let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${ucapan()}

${user.banned ? 'kamu dibanned' : 'Terimakasih telah menghubungi XsvsH. Silahkan beri tahu apa yang bisa saya bantu.\n\n⚠️ NO DISPAM ‼️\n⚠️ NO TELP/VC ‼️\n\nMelanggar = Block\n\nInvite bot ke grup Anda?\nKetik #join <link>\n\nPengen curhat sama bot?\nKetik #on simi\nSenang Senanglah\n\nAda bug atau eror? Lapor ketik #owner\n\nJika anda merasa Bot ini membantu, jangan sungkan sungkan untuk memberi Donasi ke Pengembang bot ini agar bot on terus, dan bisa membantu.\nKetik #donasi untuk donasi.\n\nThanks✨'}
`.trim(), '© xyz', user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? ',owner' : ',?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
