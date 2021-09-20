let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
 try {
    let res = await fetch('https://meme-api.herokuapp.com/gimme')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
©XsvsH
`.trim()
    conn.sendFile(m.chat, json.url, 'test.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Erro!*_'
    }
}

handler.help = ['meme']
handler.tags = ['random']
handler.command = /^meme$/i

handler.fail = null

module.exports = handler
