const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('By NightMarE Enjoy');
});

client.on('message', message => {
  if (message.content === 'طيب') {
      if (message.author.id !== '388463178377330688') return message.react('⚠')
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
  }
});

client.login('NDI2NzU2OTU2MTE2NzQ2MjUy.DZan8g.pWZwtE4y-RLoZr9ZgTRcC5JwiL4');
