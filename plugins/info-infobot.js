import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
โ โใ ๐๐๐๐ ๐๐๐ ๐๐๐ ใ โ
โ 
โ โฅ [๐คด๐ป] ๐ฒ๐๐ด๐ฐ๐ณ๐พ๐: *Ale*
โ โฅ [#๏ธโฃ] ๐ฝ๐พยฐ ๐ณ๐ด๐ป ๐ฒ๐๐ด๐ฐ๐ณ๐พ๐: *+51 9148-65141*
โ โฅ [๐ณ] ๐ฟ๐๐ด๐ต๐ธ๐น๐พ: *${usedPrefix}*
โ โฅ [๐] ๐ฒ๐ท๐ฐ๐๐ ๐ฟ๐๐ธ๐๐ฐ๐ณ๐พ๐: *${chats.length - groups.length}*
โ โฅ [๐ฆ] ๐ฒ๐ท๐ฐ๐๐ ๐ณ๐ด ๐ถ๐๐๐ฟ๐พ๐: *${groups.length}* 
โ โฅ [๐ก] ๐ฒ๐ท๐ฐ๐๐ ๐๐พ๐๐ฐ๐ป๐ด๐: *${chats.length}* 
โ โฅ [๐] ๐ฐ๐ฒ๐๐ธ๐๐ธ๐ณ๐ฐ๐ณ: *${uptime}*
โ โฅ [๐ฉ] ๐๐๐๐ฐ๐๐ธ๐พ๐: *${totalreg} ๐๐๐๐๐๐๐*
โ โฅ [๐จโ๐ฆฏ] ๐๐ด๐ป๐พ๐ฒ๐ธ๐ณ๐ฐ๐ณ: 
โ   *${speed}* 
โ   *๐๐๐๐๐๐๐๐๐๐๐๐*
โ โฅ [โ๏ธ] ๐ฐ๐๐๐พ๐๐ด๐ฐ๐ณ: ${autoread ? '*๐๐๐๐๐๐๐๐*' : '*๐๐๐๐๐๐๐๐๐๐๐*'}
โ โฅ [โ] ๐๐ด๐๐๐๐ธ๐ฒ๐: ${restrict ? '*๐๐๐๐๐๐๐๐*' : '*๐๐๐๐๐๐๐๐๐๐๐*'} 
โ 
โ โใ ๐๐จ๐ญ๐๐ก๐ฎ๐ณแ  แทฆ ใ โ
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐ธ๐ฝ๐ต๐พ ๐ณ๐ด๐ป ๐ฑ๐พ๐',
body: '๐๐จ๐ญ๐๐ก๐ฎ๐ณแ  แทฆ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/IdkJhus`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
