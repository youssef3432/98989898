const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");

client.on('ready', () => {
    client.user.setStatus('idle');
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         

                                 [ https://discord.gg/hS7PwCZ ] **)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
         

                                 [ https://discord.gg/hS7PwCZ ] **)
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
