const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('message', message => {
var prefix = "=";
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == ID ROOM) return;

if (message.content.startsWith(prefix + 'playing')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : Status changed`)
} else

if (message.content.startsWith(prefix + 'Stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/m2321");
    message.channel.sendMessage(`**${argresult}** :The bot stream has been changed`)
} else

if (message.content.startsWith(prefix + 'Name')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Name changed`)
  return message.reply("**You**");
} else
if (message.content.startsWith(prefix + 'Image')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);

}
});

client.login(process.env.BOT_TOKEN);
