let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*[βππππβ] π΄πππ΄ π²π·π°π π΅ππ΄ π±π°π½π΄π°π³πΎ πΏπΎπ Botcito2.0.*\n\n*ββ π΄π» π±πΎπ π½πΎ ππ΄ππΏπΎπ½π³π΄ππ°Μ π·π°πππ° πππ΄ π΄π» π³π΄π²πΈπ³π° π»π΄ππ°π½ππ°π π΄π» π±π°π½.*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.rowner = true
export default handler
