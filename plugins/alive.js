const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*HEY DEAR* ,${pushname}\n *I Am AlIVE NOW....! 🖐🏻*

╭════════════⊷❍ 
┊
┊FOR MORE DETAILS  ,   TYPE ( *.menu*) 🔐
┊
╰════════════⊷❍

*- I AM HS - MD V2 WHATSAPP USER BOT 🇦🇱*


> POWERED BY THE MAIN CYBER TEAM 🚩`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/qYMmPNMj/1734896787176.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
