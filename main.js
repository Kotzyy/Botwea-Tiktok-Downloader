const simple = require('./lib/simple')
const { WAConnection: _WAConnection, MessageType, compressImage } = require("@adiwajshing/baileys")
const WAConnection = simple.WAConnection(_WAConnection)
const axios = require("axios");
const fs = require("fs");
const config = require('./config')
const color = require('./lib/color')
const functions = require('./lib/function') 
const scrape = require('./lib/scrape/index')

WAConnection.prototype.get = function (message, callback){
  if (!this.commands) this.commands = {};
  this.commands[message] = callback;
}
const conn = new WAConnection();
global.cmd = conn
global.scrape = scrape
global.config = config
global.axios = axios
global.functions = functions

for (let a of fs.readdirSync('./plugins')) require(`./plugins/${a}`)
require('./whatsapp/connect')
require('./handler')