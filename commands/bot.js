const Discord = require('discord.js');

module.exports = {
	name: 'bot',
	description: 'Get info about the AirPods bot',
	execute(message, args) {
		message.channel.send(new Discord.RichEmbed()
			.setAuthor('AirPods Clan Helper Bot')
			.setColor('#0099ff')
			.setDescription('Nova SMP gay, but we still play')
		);
	},
};