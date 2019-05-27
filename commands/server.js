const Discord = require('discord.js');
const request = require('request');

module.exports = {
	name: 'server',
	description: 'Get Nova SMP status',
	execute(message, args) {
        request('https://api.mcsrvstat.us/2/mc.samstep.ga:25566', {json:true}, (err, res, body) => {
            if (body.online) {
                // Server is online
                console.log('Server is online!');
                message.channel.send(new Discord.RichEmbed()
                    .setTitle('NovaSquad SMP')
                    .setDescription('mc.samstep.ga:25566')
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
                    .setColor('#f44242')
                    .setDescription('Server Offline')
                );
            }
        });
        return;
	},
};