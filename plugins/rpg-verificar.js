import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `*[βππππβ] ππ ππππΜ ππππππππππ/π!!\n\nπΊπ ππππππ ππππππ ππ ππππππππ πππ ππππ πππππππ ${usedPrefix}unreg <numero de serie>*\n\nπΊπ ππ πππππππππ ππ ππΜππππ ππ πππππ πππ ππππ πππππππ ${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = Math.floor(Math.random() * 41)
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
let caption = `ββ ββββββββββββ β β
βγ πππ§ππππππ§ γ
β£β ββββββββββββ β β
β *π΅πΆπ΄π©πΉπ¬:* ${name}
β *π¬π«π¨π«:* ${age} aΓ±os
β  *π©πΆπ΅πΆ* 
β *$350 XP*
β *$200 π³πΆπ³π°πͺπΆπ°π΅πΊ*
β *$2 π«π°π¨π΄π¨π΅π»π¬*
β *ππͺΜπ’ππ§π€ ππ π¨ππ§ππ:* 
β ${sn}
ββ ββββββββββββ β β`
let author = global.author
conn.sendButton(m.chat, caption, `Β‘ππ ππΜππππ ππ πππππ ππ πππππππΜ ππ ππππ πππ ππππππ ππππππ ππ ππππππππ!\n${author}`, [['Β‘Β‘π¨ππππ πππππ ππππππππππ/π β!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler
