const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
let fs = require("fs");
const globPromise = promisify(glob);

module.exports = async (client) => {

client.on("ready", async () => {
  client.user.setActivity("richârd ❤ Şah");
  client.user.setUsername("richârd ❤ Şah");
  console.log("✅ Tanımlar yüklendi")
  setTimeout(x=> {
    console.log("🏁 "+client.user.tag+" olarak giriş yapıldı.")
  }, 10)
  setTimeout(async(x)=>{
    const commandFiles = await globPromise(`${process.cwd()}/SRC/Commands/DefaultCommands/*/*.js`)
    commandFiles.map(value => {
      const file = require(value);
      if (file.name) {
          client.commands.set(file.name, file);
      }
    });
    console.log('✅ Komutlar yüklendi.');
  }, 1000)
  
  setTimeout(x=> {
  fs.readdirSync("./SRC/Events").filter(file => file.endsWith(".js")).forEach(file => {
    const reference = require("../../SRC/Events/" + file)
    if (!reference) return
    client.on(file.split(".js")[0], reference)
  });
  console.log('✅ Aktiviteler yüklendi.');
  }, 1500)
  setTimeout(x=> {
client.on("messageCreate", (message) => {
  const prefix = Depression.config.prefix;
  if (!(message.content.startsWith(Depression.config.prefix)) || message.author.bot || !message.guild || !prefix || message.guild.id !== Depression.config.server) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();
  const command = message.client.commands.get(commandName) || message.client.aliases.get(commandName)
  if (command) {
      command.run(message, args).catch()
  } else return;
})
    console.log("✅ Bot kullanıma hazır.")
  }, 2000)
})
};
