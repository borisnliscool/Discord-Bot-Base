require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const fs = require('fs');
const config = require('./config.json');
const commands = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

client.once('ready', () => {
    console.log(`Logged in as: "${client.user.tag}"!`);
});

client.on('messageCreate', message => {
    if (message.content.startsWith(config.prefix)) {
        const args = message.content.slice(config.prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        
        let found = false;
        commands.forEach(cmd => {
            if (found) return;
            if (cmd.toLowerCase() === command + '.js') {
                found = true;
                try {
                    const commandFile = require(`./commands/${cmd}`);
                    commandFile.run(client, message, args);
                } catch (err) {
                    console.error(`An error occured while running the command "${cmd}": ${err}`);
                }
            }
        });

        if (!found) {
            message.reply('Unknown command!');
        }
    }
});

client.login(process.env.CLIENT_TOKEN);