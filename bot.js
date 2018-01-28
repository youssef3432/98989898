const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});











client.on("message", message => {
 if (message.content === "$$help.all") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setFooter('By Tornado Team')
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
**-🚀 سرعه اتصال ممتازه
-🔰 سهل الاستخدام
-⚠ صيانه كل يوم
-💵 مجاني بل كامل 
-📚 بوت عربي وسيتم اضافه اللغه الاجنبيه قريبا
-🎶 يحتوي على خاصيه الميوزك بجوده عاليه**

  **✨Administrationr Commands | اوامر الاداره✨**
- امر البرودساكت   -bc
message.author.sendEmbed(embed)

}
}); 


client.login(process.env.BOT_TOKEN);
