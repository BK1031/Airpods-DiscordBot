const Discord = require('discord.js');
const request = require('request');

module.exports = {
	name: 'server',
	description: 'Get NovaSquad SMP server status',
	execute(message, args) {
        request('https://api.mcsrvstat.us/2/35.227.157.239', {json:true}, (err, res, body) => {
            if (body.online) {
                // Server is online
                console.log('Server is online!');
                message.channel.send(new Discord.RichEmbed()
                    .setTitle('Airpods SMP')
                    .setDescription('35.227.157.239')
                    .setColor('#42f477')
                    .addField('Version', body.version)
                    .addField('Online', `${body.players.online}/${body.players.max}`)
                    .addField('Players', body.players.list)
                    .setFooter(body.software)
                    .setTimestamp()
                );
            }
            else {
                console.log('Server not online!');
                message.channel.send(new Discord.RichEmbed()
                .setTitle('NovaSquad SMP')
                    .setDescription('35.227.157.239')
                    .setColor('#f44242')
                    .addField('Offline', `--------`)
                    .setTimestamp()
                );
            }
        });
        return;
	},
};