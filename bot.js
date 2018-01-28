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








Client.on("message", message => {
    var prefix = "-";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(":white_check_mark: | تم ارسال للكل رساله فارغه")
                                .setColor("#FF0000")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال للكل الرساله !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});



         client.on('message', message => {
           if (message.content.startsWith(prefix + "id")) {
        var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
       var h = message.mentions.users.first();
          var h;
            if(h){
                var h = h;
            } else {
                var h = message.author;
                
            }
              var z = message.mentions.members.first();
          var z;
            if(z){
                var z = z;
            } else {
                var z = message.member;
            }
             moment.locale('ar-ly');
            let heroo = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(h.avatarURL)
            .setAuthor(h.username,h.avatarURL)
            .addField(': تاريخ دخولك الدسكورد',`${moment(h.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(h.createdAt).fromNow()}\``,true)            
            .addField(': تاريخ دخولك السيرفر',`${moment(z.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(z.joinedAt).startOf(' ').fromNow()}\`\``, true)      
             .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
            if(message.author.bot) return message.channel.send("**# Bots cannot excute commands!**");
            if(h.bot) return message.channel.send("**# Bots have no profiles!**");
         message.channel.send({embed:heroo})
           }
         });



var prefix = "-";
client.on('message',function(message) {
  let args = message.content.split(" ").slice(1);
  let x = args.join(" ")
if(message.content < 1022) return
    if(message.content.startsWith(prefix + 'f')) {
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');   
      client.channels.get("391012078732705892").sendMessage("@everyone")      
      client.channels.get("391012078732705892").sendFile(x)
    }

  });



client.login(process.env.BOT_TOKEN);
