const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Botun Pingini Gösterir",
    type: 'USER',


    run: async (client, interaction) => {

       
        interaction.followUp({ content: `${client.ws.ping}ms!` });
       
    },
};