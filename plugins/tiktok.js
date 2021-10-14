cmd.get("tiktok", async(m, args) => {
	if (!args[0]) return m.reply('please put tiktok url')
	const fetch = require('node-fetch')
	try { 
	var tiktok = await scrape.tiktok(args)
	cmd.send2ButtonImg(m.chat,  await (await fetch(tiktok.thumbnail)).buffer(), `${tiktok.desctription}

*Likes:* ${tiktok.likes}
*View:* ${tiktok.view}
*Comment:* ${tiktok.comment}
*Share:* ${tiktok.share}
*Music Name:* ${tiktok.music_name}`, '© Ichinose', 'No Watermark', `>nowm ${tiktok.nowatermark}`, 'With Watermark', `>wm ${tiktok.videoUrl}`, m)
  	} catch(err) {
  		console.log(err)
  		m.reply('Terjadi kesalahan dalam mengambil media! / Invalid Url...')
  	}
})

exports.help = {
    name: "Tiktok Downloader No Watermark",
    description: "TikTok Downloader lets you save TikTok videos to your",
    usage: "tiktok"
};