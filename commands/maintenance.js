const Discord = require('discord.js');
const fs = require('fs');
const botconfig = require("../botconfig.json");

module.exports = {
	name: 'maintenance',
	description: 'Toggle maintenance mode',
	execute(message, args) {
        botconfig.maintenance = !botconfig.maintenance;
        console.log("Updated maintenance mode: " + botconfig.maintenance);
        message.channel.send("Updated maintenance mode: " + botconfig.maintenance);
	},
};