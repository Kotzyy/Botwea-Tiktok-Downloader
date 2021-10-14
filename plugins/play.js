cmd.get("play", async(m, args) => {
	if (!args[0]) return m.chat('Use /play <query> contoh /play anjay songs')
	const yts = require('yt-search')
	const fetch = require('node-fetch')
	const result = await yts(`${args}`)
    let vid = result.all.find(video => video.seconds < 3800)
    if (!vid) return m.reply('Video/Audio Tidak ditemukan')
    let caption =
    `*• Title:* ${vid.title}\n` +
    `*• Duration:* ${vid.timestamp}\n` +
    `*• Uploaded:* ${vid.ago}\n` +
    `*• VideoID:* ${vid.videoId}\n`+
    `*• Url:* ${vid.url}`+
    `pilih salah satu format dibawah ini!`;
    await cmd.send2ButtonImg(m.chat, await (await fetch(vid.image)).buffer(), caption, '© Ichinose', 'Video', `>ytv ${vid.url}`, 'Audio', `>yta ${vid.url}`, m) 
})

exports.help = {
    name: "Play",
    description: "Youtube play\n\nPlay video/audio from YouTube",
    usage: "/play"
};