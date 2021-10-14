cmd.get("waifu", async(m) => {
	var waifu = await axios.get('https://api.waifu.pics/sfw/waifu')
	cmd.sendFile(m.chat, waifu.data.url, m)
})

exports.help = {
    name: "Waifu",
    description: "waifu image",
    usage: "waifu"
};