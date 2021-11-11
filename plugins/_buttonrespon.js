const buttonresponse = async(cmd, content) => { 
  let m = content
  let buttonId = m.msg.selectedButtonId
  const buttonCmd = buttonId.replace('>', '').trim().split(/ +/).shift().toLowerCase()
  const fetch = require('node-fetch')
  console.log(buttonId)
  switch(buttonCmd) { 
    case 'readme':
      m.reply(`Berikut Cara Penggunaan Bot

Jika Terdapat Tanda < Dan > Artinya Di perlukan Sesuatu
Contoh: < Teks >
Artinya Diatas Diperlukan Teks
Ada juga ( Dan )
Artinya Itu Bisa Di Isi Bisa Tidak Sesuai Ada Mau (Opsional)
*_Cara Penggunaan_*
Untuk Penggunaan Silahkan Ketik /menu :
*fiturnya*
Contoh: */menu*
Di Nomor Bot Atau Di Grub Yang Terdapat Nomor Bot, Maka Bot Akan Merespon!
Untuk Penggunaan Kedua Contohnya Jika Terdapat < Dan > Maka Kurung Tadi Jangan Di Anggap
Contoh: */tiktok https://vt.tiktok.com/ZSerm6oTB/*
Untuk Info Lebih Lanjut Ketik */menu <nama command>*
Contoh: Contoh */menu tiktok*`)
    break
    case 'nowm':
      m.reply('Tunggu sedang di proses')
      cmd.sendFile(m.chat, buttonId.slice(6), 'tiktok.mp4', 'success', m)
      break
    case 'wm':
      m.reply('Tunggu sedang di proses')
      cmd.sendFile(m.chat, buttonId.slice(4), 'tiktok.mp4', 'success', m)
      break
    case 'ttaudio':
      m.reply('Tunggu sedang di proses')
      cmd.sendFile(m.chat, buttonId.slice(9), 'tiktok.mp3', '', m, false, { asDocument: true})
      break
    }
  }

module.exports = {
  buttonresponse
}