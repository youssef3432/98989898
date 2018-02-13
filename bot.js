const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});


client.on("message", msg => {
  if(msg.content.startsWith ===(prefix + "id")) {
      const embed = new Discord.RichEmbed();
  embed.addField("Username", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("ID", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('Currently', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('Game', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('Roles', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('Is Bot', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});
client.login(process.env.BOT_TOKEN);
