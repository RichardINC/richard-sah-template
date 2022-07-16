const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
module.exports = {
    "name": "ping",
    "aliases": ["ms"],

    async run(message, args) {
        let Button1 = new MessageButton()
            .setStyle("DANGER")
            .setLabel('Bot Pingi')
            .setCustomId('wsping');
        const row1 = new MessageActionRow().addComponents(Button1)
        const CollectMessage = await message.reply({ content: `Botun Pingini Öğrenmek İçin Butona Tıklayın!`, components: [row1] });
        const filter = i => i.user.id === message.author.id;
        const collector = CollectMessage.createMessageComponentCollector({ filter, time: 60000 });
        collector.on('collect', async button => {
            button.deferUpdate();
            if (button.isButton()) {
                if (button.customId === "wsping") {
                    message.reply({ content: `${client.ws.ping}ms`, ephemeral: true })
                }
            }
        })
    }
}