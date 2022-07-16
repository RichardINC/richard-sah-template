const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Botun Pingini Gösterir",
    type: 'CHAT_INPUT',


    run: async (client, interaction, args) => {

       
        interaction.followUp({ content: `${client.ws.ping}ms!` });
       
    },
};