const Discord = require('discord.js')
const client = new Discord.Client();

client.on("ready", () => {
    console.log("[LIGOU]");
});

var links = ['steancomunnity','streancomunnuty']

client.on('message', async message => {        
    if(message.author.bot) return;
    links.forEach(function(element){
        if (message.content.includes(element)) {message.delete()}
    });
})

client.login('TOKEN')
