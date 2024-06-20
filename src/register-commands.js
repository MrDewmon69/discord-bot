require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!'
    },
];

const rest = new REST({ version: '10'}).setToken(process.env.bot_token);

(async () => {
    try {
        console.log('Registering Slash Commands')
        await rest.put(
            Routes.applicationGuildCommands(process.env.bot_id, process.env.guild_id), {
                body: commands
            }
        )
        console.log('Registered Slash Commands')
    } catch (error) {
        console.log(`There was an error ${error}`);
    }
})();