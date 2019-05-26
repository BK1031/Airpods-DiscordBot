const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
	name: 'bases',
	description: 'Get all stored base locations',
	execute(message, args) {
        var returnEmbed = new Discord.RichEmbed()
            .setTitle('Bases List')
            .setColor('#0099ff');
		fs.readFile('./models/bases.json', (err, data) => {  
            if (err) throw err;
            let bases = JSON.parse(data);
            bases.forEach(base => {
                console.log(base);
                message.channel.send(new Discord.RichEmbed().addField(base.name, `${base["x-coord"]}, ${base["y-coord"]}`, true));
            });
        });
	},
};