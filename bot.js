const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'لا') {
    msg.reply('لالا!');
  }
});

    
    client.on('ready', () => {
        client.user.setActivity("Your Mom Moaing",{type: 'LISTENING'});

});
client.login(process.env.BOT_TOKEN);
