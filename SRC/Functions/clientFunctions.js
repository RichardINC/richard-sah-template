const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection, Permissions } = require('discord.js');

class Functions {    

static test(option) {
    if(!option) return;
    return option.channel.send({content: "sa"})
}
}
module.exports = Functions;