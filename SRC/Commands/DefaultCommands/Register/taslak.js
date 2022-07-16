const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
module.exports = {
    "name": "test2",
    "aliases": ["qwee"],

    async run(message, args) {
    message.channel.send({content: "as"})
    } 
}