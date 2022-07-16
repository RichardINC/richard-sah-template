const { Client, Collection, MessageActionRow, MessageSelectMenu, MessageButton, Collector, MessageEmbed, Message, Intents } = require("discord.js");
const client = global.client = new Client({ intents: 32767 });
globalThis.Depression;
const moment = require('moment');
moment.locale("tr");
client.commands = new Map()
client.slashCommands = new Collection();
client.aliases = new Map()
require("./SRC/Functions/slashHandler.js")(client);
require("./SRC/Functions/defaultHandler.js")(client);
const Veritabani = require("fresh.db");


setTimeout(x=> {
  console.clear()
  const config = require("./src/Configs/Config.json");
  const {test} = require("./SRC/Functions/clientFunctions.js");
  const functions = require("./SRC/Functions/clientFunctions.js");
  Depression = {config,functions,test};
  global.clientdb = new Veritabani({name:"clientdb", prettySave: true, folderPath:__dirname + "/src/Models"});
  console.log("✅ Tanımlar yüklendi")
}, 100)
setTimeout(x=> {
  console.clear()
  console.log("✅ Tanımlar yüklendi")
  console.log("♻ Bot Çalıştırılıyor.")
}, 1000)
setTimeout(x=> {
  console.clear()
  console.log("✅ Tanımlar yüklendi")
  console.log("♻ Bot Çalıştırılıyor..")
}, 2000)
setTimeout(x=> {
  console.clear()
  console.log("✅ Tanımlar yüklendi")
  console.log("♻ Bot Çalıştırılıyor...")
}, 3000)
setTimeout(x=> {
  console.clear()
  client.login(Depression.config.token).catch(err => console.log("token hatalı knk"))
}, 4000)