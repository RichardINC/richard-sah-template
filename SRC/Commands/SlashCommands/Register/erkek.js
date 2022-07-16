const { Client, Intents, Message, MessageEmbed, MessageActionRow, MessageButton, Collection, Permissions } = require('discord.js');

module.exports = {
  name: "erkek",
  description: "Kullanıcıyı Erkek Olarak Kayıt Eder",
  type: 'CHAT_INPUT',
  options: [{
    name: 'uye',
    type: 'USER',
    required: true,
    description: 'Kayıt için üye etiketlemelisin'
  }, {
    name: 'isim',
    type: 'STRING',
    required: true,
    description: 'Kayıt için geçerli bir isim girmelisin'
  }, {
    name: 'yas',
    type: 'NUMBER',
    required: true,
    description: 'Kayıt için geçerli bir yaş girmelisin'
  }],


  run: async (client, interaction, args) => {
    const member = interaction.options.getMember('user') || interaction.member;
    const name = interaction.options.getString('isim');
    const age = interaction.options.getNumber('yas');
    const embed = new MessageEmbed()
      .setTitle(`çıktı ${member.displayName ? member.displayName : member.username} üyesi ismi ${name} yasi ${age}`)
      .setFooter({ text: interaction.member.displayName ? interaction.member.displayName : interactionmember.username, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })
      .setTimestamp()
      .setColor("BLURPLE");
    interaction.followUp({ embeds: [embed] });

  },
};