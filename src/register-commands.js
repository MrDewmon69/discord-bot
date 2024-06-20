require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Replies with hey!'
    },
    {
        name: 'add',
        description: 'Adds 2 numbers',
        options: [
            {
                name: 'first-number',
                description: 'The first number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second-number',
                description: 'The second number',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
        ]
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