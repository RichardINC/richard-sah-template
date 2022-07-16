const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
module.exports = {
    "name": "taglı",
    "aliases": ["tagged"],

    async run(message, args) {
        let Button1 = new MessageButton()
            .setStyle("SUCCESS")
            .setLabel('Aç')
            .setEmoji("942777976955760681")
            .setCustomId('taggedopen');
        let Button2 = new MessageButton()
            .setStyle("DANGER")
            .setLabel('Kapat')
            .setEmoji("942777976733458483")
            .setCustomId('taggedclose');
        let Button3 = new MessageButton()
            .setStyle("PRIMARY")
            .setLabel('Anlık Durum')
            .setEmoji("927112905013485579")
            .setCustomId('taggedinfo');
        const row1 = new MessageActionRow().addComponents(Button1, Button2, Button3)
        const embed = new MessageEmbed();
        const CollectMessage = await message.reply({ embeds: [embed.setDescription(`Sunucu içerisindeki taglı alımı açmak, kapatmak veya taglı üyeler hakkında bilgi almak için butonları kullanbilirsin!`)], components: [row1] });
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