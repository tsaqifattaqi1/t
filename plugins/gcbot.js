let handler = async m => m.reply(`
*⚠GRUP BOT⚠*
1. https://chat.whatsapp.com/L508viIjjPwHpYEqgTxqj6
`.trim()) 
handler.help = ['gcb', 'gcbt']
handler.tags = ['info', 'update']
handler.command = /^gcbt|gcb$/i

module.exports = handler
