const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
module.exports = {
    "name": "eval",
    "aliases": ["dene"],

    async run(message, args) {

        if (message.author.id === Depression.config.owner) {

                  try {
                            let code = args.join(' ')
                            let evaled = eval(code)

                            evaled = require('util').inspect(evaled)

                            if (!code) return message.channel.send({content: "hani komut amk çocu"})

                            if (code.includes("client.token")) return message.channel.send({content: "bak bak hoppa"})

                            message.channel.send({content: `\`\`\`js\n${evaled.length > 1000 ? `${evaled.slice(0, 1000)}...` : `${clean(evaled)}`}\`\`\``})
                  } catch (err) {
                            message.channel.send({content: `\`\`\`js\n${clean(err).length > 1000 ? `${clean(err).slice(0, 1000)}...` : `${clean(err)}`}\n\`\`\``})
                  }
        }
                        else
        if (message.author.id === Depression.config.owner2) {

                  try {
                            let code = args.join(' ')
                            let evaled = eval(code)

                            evaled = require('util').inspect(evaled)

                            if (!code) return message.channel.send({content: "hani komut amk çocu"})

                            if (code.includes("client.token")) return message.channel.send({content: "bak bak hoppa"})

                            message.channel.send({content: `\`\`\`js\n${evaled.length > 1000 ? `${evaled.slice(0, 1000)}...` : `${clean(evaled)}`}\`\`\``})
                  } catch (err) {
                            message.channel.send({content: `\`\`\`js\n${clean(err).length > 1000 ? `${clean(err).slice(0, 1000)}...` : `${clean(err)}`}\n\`\`\``})
                  }
        }

          }
}

function clean(text) {
          if (typeof (text) == 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203)).replace(Depression.config.token, "neden buraya baktın?")
          else return text
};