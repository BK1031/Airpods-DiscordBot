const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setPresence({
        game: {
            name: botconfig.rich_presence.game,
            type: botconfig.rich_presence.type,
            url: botconfig.rich_presence.url,
        }
    });
});

bot.on("message", async (message) => {
    if (!message.content.startsWith(botconfig.prefix)) {
        return;
    }
    else {
        message.channel.send("recieved command!");
    }
});

bot.login(botconfig.token);