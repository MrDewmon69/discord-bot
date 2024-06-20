const { Client, IntentsBitField, ActivityType } = require('discord.js');
require('dotenv').config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online!`);

    client.user.setActivity({
        name: "Life",
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    });
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'hey') {
        interaction.reply('Hey!')
    }

    if (interaction.commandName === 'add') {
        const num1 = interaction.options.get('first-number')?.value;
        const num2 = interaction.options.get('second-number')?.value;

        interaction.reply(`The sum is ${num1 + num2}`)
    }
})

client.login(process.env.bot_token)