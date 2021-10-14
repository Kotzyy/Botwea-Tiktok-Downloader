cmd.get("sticker", async(m) => {
	try {
		let q = m.quoted ? m.quoted : m
		let mime = (q.msg || q).mimetype || ''
		let getName = cmd.getName(m.sender)
		if (/image/.test(mime)) {
			let img = await q.download()
			if (!img) throw `balas gambar dengan caption */sticker*`
			cmd.sendSticker(m.chat, img, 'UwU', `${getName}`)
		} else if (/video/.test(mime)) { 
			let img = await q.download()
			if (!img) throw `balas gambar dengan caption */sticker*`
			cmd.sendSticker(m.chat, img, 'UwU', `${getName}`)
		} else {
			cmd.reply(m.chat, 'balas gambar dengan caption */sticker*', m)
		}
	} catch(err){
		console.log(err)
	}
})

exports.help = {
    name: "Sticker",
    description: "Convert Image/Video to Sticker\nVideo Max duration : 5 Second\nImage Max SIZE : 1 MB\n\nReply/Caption With Image",
    usage: "/sticker"
};