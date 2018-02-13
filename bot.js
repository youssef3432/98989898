const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '403568363516985345') return;

if (message.content.startsWith(prefix + '1')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + '2')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + '3')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + '4')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:  : ${argresult}**`)
}

});


client.login(process.env.BOT_TOKEN);
