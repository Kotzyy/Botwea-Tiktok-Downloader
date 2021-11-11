cmd.get("tiktok", async(m, args) => {
	if (!args[0]) return m.reply('please put tiktok url')
	const fetch = require('node-fetch')
	try { 
	var tiktok = await api.tiktok(args[0])
	cmd.send2ButtonVideo(m.chat,  await (await fetch(tiktok.nowm)).buffer(), `${tiktok.caption}`, 'By Tiktok Downloader', 'With Watermark', `>wm ${tiktok.wm}`, 'Only Audio', `>ttaudio ${tiktok.music}`)
  	} catch(err) {
  		console.log(err)
  		m.reply('Terjadi kesalahan dalam mengambil media! Mohon tunggu beberapa saat lagi')
  	}
})

exports.help = {
    name: "Tiktok Downloader",
    description: "TikTok Downloader lets you save TikTok videos to your",
    usage: "/tiktok <url>"
};
