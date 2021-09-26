const fetch = require("node-fetch")
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Contoh Penggunaan:\n*${usedPrefix + command} japanese*`
    res = await (await fetch(`https://mnazria.herokuapp.com/api/porn?search=${text}`)).json()
    m.reply(`Loading...`)
    json = JSON.parse(JSON.stringify(res.result))
    ran =  json[Math.floor(Math.random() * json.length)]
   let {actors, duration, image, title, url} = ran //Kalau mau bisa tambahin di caption
    link = (await (await fetch(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${url}`)).json()).mp4
    await conn.sendFile(m.chat, link, ``, ``, m)
}
handler.command = ["playb"]
handler.owner = true

module.exports = handler
