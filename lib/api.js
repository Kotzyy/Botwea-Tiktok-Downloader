const {
    default: Axios
} = require('axios');
const fs = require('fs');
global['config'] = JSON.parse(fs.readFileSync('./config.json'));

function tiktok(url) {
    return new Promise((resolve, reject) => {
        Axios.get(global.config.api + '/api/tiktok?url=' + url + '&apikey=' + global.config.apikey)
            .then(({
                data
            }) => {
                data = data.result
                let cp = `*Tiktok Downloader*\n\n`
                cp += `*📬 Id :* ${data.id}\n`
                cp += `*👤 Username :* ${data.username}\n`
                cp += `*💌 Nama :* ${data.nickname}\n`
                cp += `*🎯 Tanggal Upload :* ${data.create_date}\n`
                cp += `*🕐 Durasi :* ${data.duration}\n`
                cp += `*💡 Resolusi :* ${data.resolusi}\n`
                cp += `*🎁 Type :* ${data.format}\n`
                cp += `*📧 Akun Terverifikasi :* ${data.verify ?   '✅' : '❎'}\n`
                cp += `*🔐 Video Private :* ${data.video_private ?   '✅' : '❎'}\n`
                cp += `*🔷 Stlich Status :* ${data.stitchEnabled ?   '✅' : '❎'}\n`
                cp += `*🐒 Duet Status :* ${data.duetEnabled ?   '✅' : '❎'}\n`
                cp += `*🎞️ Total Tayangan :* ${data.statistic.playCount}\n`
                cp += `*🌐 Total Share :* ${data.statistic.shareCount}\n`
                cp += `*💭 Total Komen :* ${data.statistic.commentCount}\n`
                cp += `*❤ Like :* ${data.statistic.diggCount}\n`
                cp += `*🎶 Judul Musik :* ${data.music.title}\n`
                cp += `*⚜️ Author Musik :* ${data.music.authorName}\n`
                cp += `*📝 Deskripsi :* \n ${data.desc}`
                resolve({
                    nowm: data.link_nowm,
                    wm: data.link_wm,
                    caption: cp,
                    music: data.music.playUrl,
                    thumb: data.thumb
                })
            })
            .catch(reject)
    })
}

module.exports = {
    tiktok
}
