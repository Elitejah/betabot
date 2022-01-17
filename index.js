const Discord = require('discord.js')
require('dotenv').config

const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES'
    ]
})

client.on('ready', () => {
    console.log(`Succesfully logged into ${client.user}.`)
})

client.on('messageCreate', (message) => {
    if (message.content == 'hi'){
        message.reply('hello')
    }
})

client.login(procces.env.TOKEN)