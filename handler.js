const didYouMean = require("didyoumean");
const chalk = require('chalk')
const fs = require('fs')
const simple = require('./lib/simple')
cmd.on("chat-update", async (chat) => {
  if (!chat.hasNewMessage) return;    
  if (!chat.messages && !chat.count) return;    
  if (!chat) return;
  const content = chat.messages.all()[0];
  if (!content) return
  simple.smsg(cmd, content)
  const mtype = content.mtype
  text = mtype == "conversation" && content.message.conversation ? content.message.conversation : mtype == "extendedTextMessage" && content.message.extendedTextMessage.text ? content.message.extendedTextMessage.text : mtype == "imageMessage" && content.message.imageMessage.caption? content.message.imageMessage.caption : mtype == "videoMessage" && content.message.videoMessage.caption ? content.message.videoMessage.caption : "";
  const body = text.startsWith(config.prefix)
  const argv = text.slice(1).trim().split(/ +/).shift().toLowerCase();
  const args = text.trim().split(/ +/).slice(1);
  const mean = Object.keys(cmd.commands)
  if (didYouMean(argv, mean) in cmd.commands && !(argv in cmd.commands)){
    cmd.sendMessage(content.chat, `Mungkin yang anda maksud adalah ${config.prefix}${didYouMean(argv, mean)}`, "conversation", { quoted: content })
  }
  if (argv in cmd.commands) {
    cmd.commands[argv](content, args);
    console.log(chalk.green(`[ USED COMMAND ] ${argv}`));
    await cmd.chatRead(content.chat)
  }   
  if (mtype === 'buttonsResponseMessage') {
    var { buttonresponse } = require('./plugins/_buttonrespon')
    buttonresponse(cmd, content)
  }
})
