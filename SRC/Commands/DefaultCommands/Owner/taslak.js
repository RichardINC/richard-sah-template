const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
module.exports = {
    "name": "test",
    "aliases": ["qwe"],

    async run(message, args) {
    message.channel.send({content: "sa"})
    } 
}