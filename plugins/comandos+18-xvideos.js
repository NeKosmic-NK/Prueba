//Creditos https://github.com/BrunoSobrino

import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${ag}ššš š¾ššš¼ššæšš +18 šššš¼š šæššš¼š¾šššš¼šæšš ššš #š¤š£ š¢š¤šš¤šš¤š§š£š® šš¼šš¼ š¼š¾šššš¼š`
if (!args[0]) throw `${mg}ššš šš šššš¼š¾š šæš šššš\nššššššš\n*${usedPrefix + command} https://www.xvideos.com/video70389849/sexo_en_casa*`
try {
await conn.reply(m.chat, `ā¤ šššššš ššš šš¼ššš š¼ ššš šš ššššš šš šššæšš`, m)
let res = await fetch(API('https://zenzapis.xyz', '/downloader/xvideos', { apikey: 'B2CB95861FBF', url: args[0] }))
let json = await res.json()
if (json.result?.message) throw json.result.message
let teks = `šššššš ā¤ ${json.result.title}`
conn.sendMessage(m.chat, { video: { url: json.result.files.high }, caption: teks }, { quoted: m })
} catch (e) {
m.reply(`${fg}šš šššš¾šššš, ššš šš šššš¼š¾š šæš ššššæššš, šššššš¼ š¼ ššššššš¼š`)
console.log(e)
}}
handler.command = /^(xvideosdl|xvideos)$/i
handler.level = 5
handler.limit = 3
export default handler
