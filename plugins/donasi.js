let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭━━•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•━━╮ 
┃╭┈─────────────⩵꙰ཱི࿐ 
┃╰──*DONATE*──➤ ↶↷* 
╰•͙✩̣̣
⁙┃ ુོ DANA     : 0888-2611-841
⁙┃ ુོ OVO      : 0888-2611-841
⁙┃ 
⁙┃ ુོ SAWERIA  : https://saweria.co/irwanxyans
⁙┃ 
⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
`.trim(), '© xyanz', 'Konfirmasi', '.creator', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
