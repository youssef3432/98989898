client.on('ready', () => {
        client.user.setActivity("Your Mom Moaing",{type: 'LISTENING'});

});

client.login(process.env.BOT_TOKEN);
