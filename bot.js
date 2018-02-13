client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 10000 ;
    var setGame = [`محمد ${client.guilds.size} `,`محمد ${client.users.size}`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);10000

});

client.login(process.env.BOT_TOKEN);
