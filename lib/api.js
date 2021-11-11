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
                cp += '*ID :* ' + data.id + '\n'
                cp += '*Name / Nickname :* ' + data.username + '/' + data.nickname + '\n'
                cp += '*Durasi :* ' + data.duration + '\n'
                cp += '*Like :* ' + data.statistic.diggCount + '\n'
                cp += '*Komentar :* ' + data.statistic.commentCount + '\n'
                cp += '*Share :* ' + data.statistic.shareCount + '\n'
                cp += '*Tayangan :* ' + data.statistic.playCount + '\n'
                cp += '*Nama Musik :* ' + data.music.title + '\n'
                cp += '*Author Musik :* ' + data.music.authorName + '\n'
                cp += '*Deskripsi :* \n' + data.desc
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