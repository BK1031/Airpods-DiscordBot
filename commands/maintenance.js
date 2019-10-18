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
        if (args.length == 0) {
            botconfig.maintenance_end = "in a bit"
            message.channel.send('Set default maintenance eta: ' + botconfig.maintenance_end);
        }
        else {
            botconfig.maintenance_end = args.join(" ");
            message.channel.send('Set maintenance eta: ' + botconfig.maintenance_end);
        }
	},
};