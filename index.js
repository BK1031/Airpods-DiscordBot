const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const csv = require('csv-parser');  
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on("ready", () => {
    console.log(`${client.user.username} is online!`);
});

client.on("message", (message) => {
    if (!message.content.startsWith(botconfig.prefix) || message.author.bot) return;

    const args = message.content.slice(botconfig.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!client.commands.has(command)) return;
    
    client.commands.get(command).execute(message, args);
});

client.login(botconfig.token);