const botconfig = require("../botconfig.json");
const Discord = require('discord.js');
const request = require('request');
const rcon = require('rcon-srcds');

const mcserver = new rcon({
    host: '35.227.157.239',
    port: 25575,
    maximumPacketSize: 4096,
    encoding: 'ascii',
    timeout: 1000
});

module.exports = {
	name: 'rcon',
	description: 'Execute a remote console command',
	execute(message, args) {
        try {
            mcserver.authenticate(botconfig.rcon_pw);
            console.log("Authenticated");
            let response = mcserver.execute(args.join(" "));
            console.log(response);
        } catch(e) {
            console.error(e);
        }
	},
};