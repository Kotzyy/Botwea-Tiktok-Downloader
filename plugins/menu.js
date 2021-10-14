cmd.get("menu", async(m, args) => {
    const fs = require('fs')
        if (!args[0]) {
            let text = `*Command list*\n`
            for(let a in cmd.commands) {
                text += `*${config.prefix}${a}*\n`
            }
                text += `\nKamu dapat menjalankan */menu <nama command>* untuk menampilkan bantuan lanjutan\nContoh */menu sticker*`
            cmd.sendButtonImg(m.chat, fs.readFileSync('./src/img/image.jpg'), text, '© Ichinose', 'Cara penggunaan', '>readme', m)
        } else {
            try { 
            const commandName = args[0];
            const { name, description, usage } = require(`./${commandName}.js`).help;
            m.reply(`${name}\n\nDescription : *${description}*\n\nUsage ${usage}`)
            } catch (err) {
                m.reply(`command tidak di temukan!`)
            }
        }
})

exports.help = {
    name: "Menu",
    description: "Show the bot's commands list",
    usage: "/menu"
};