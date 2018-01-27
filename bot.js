const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});




client.on('message', message => {
if (message.content === "-server") {
if(!message.channel.guild) return;
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();

const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField(":id: سيـرفر ايــدي", ""+message.guild.id+"",true)
.addField(":crown: سيــرفر اونـر", ""+message.guild.owner+"" ,true)
.addField(":white_check_mark: الشــات الاســاســي" , ""+message.guild.DefaultChannel+"" ,true)
.addField(":earth_africa: المـوقع" , ""+message.guild.region+"",true)
.addField(':speech_balloon: عدد الرومــات الكتابيــة',**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **,true)
.addField(":mega: عدد الرومــات الصوتــية", ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel **,true)
.addField(":thinking: عدد ايــام انشــاء السيــرفر", ** [ ${days.toFixed(0)} ] ** Day ,true)
.addField(":necktie: الــرتــب",**[${message.guild.roles.size}]** Role,true)
.addField(":diamond_shape_with_a_dot_inside: مســتوى حمــاية الســيرفر", ** [ ${verificationLevels[message.guild.verificationLevel]} ] **,true)

.addField(":busts_in_silhouette:عدد الاعضــاء",**${message.guild.memberCount}**)
.setThumbnail(message.guild.iconURL)
.setColor('RANDOM')
message.channel.sendEmbed(embed)

}
});


client.login(process.env.BOT_TOKEN);
