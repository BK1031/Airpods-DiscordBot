const Discord = require('discord.js');

module.exports = {
	name: 'setrole',
	description: 'Add a role to a specific user',
	execute(message, args) {
        if (args.length != 2) {
            message.channel.send('Command Usage: ```?setrole [@User] [Role]```');
            return;
        }
        if (!message.author.id == '348220961155448833') {
            message.channel.send('Sorry buddy, you can\'t do that here');
            return;
        }

        try {
            let member = message.mentions.members.first();
            let role = message.guild.roles.find(role => role.name === args[1]);
            if (member.roles.has(role.id)) {
                console.log(`${member.nickname} already has the role "${role.id}"`);
                message.channel.send(`<@${member.user.id}> is already a ${role.name}!`);
                return;
            }
            member.addRole(role);
        } catch (err) {
            console.log(err);
            message.channel.send(`Whoops! An error occured while trying to do that. Please kindly check the logs in Christ through Christ.`);
            return;
        }
        message.channel.send(`<@${member.user.id}> is now a ${role.name}!`);
	},
};