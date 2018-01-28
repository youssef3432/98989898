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
- $$Kick / طرد شخص من السيرفر
- $$ban / حظر شخص من السيرفر
- $$clear / مسح المحادثات الكتابيه
- $$mute / تحت الصيانه
- $$unmute / تحت الصيانه
- $$b / ارسال رساله من خلال البوت
  **🔩Bot Commands | اوامر البوت🔩**
- $$support / عرض سيرفر المساعده
- $$invite / رابط اضافه البوت
- $$bot / معرفه عدد السيرفرات والمستخدمين
- $$ping / عرض سرعه الاتصال 
- $$info / عرض معلومات البوت
- $$members / عرض عدد الاشخاص المتصلين
  **📡General Commands | الاوامر العامه📡**
- $$id / عرض معلوماتك الشخصيه
- $$server / عرض معلومات السيرفر
- $$avatar / عرض صورتك الشخصيه
- $$sav / عرض صورة السيرفر
- $$say / البوت يكرر كلامك 
- $$embed / البوت يكرر كلامك بطريقه اخرى
- $$date / عرض اليوم + الشهر + السنه 
- $$contact / لارسال رساله لصاحب البوت
- $$roll / قرعه عشوائيا من 0 الى الرقم 100
  **🎶Music Commands | اوامر الاغاني🎶**
- $$play / لتشغيل الاغنيه
- $$skip / تخطي الاغنيه
- $$volume / صوت البوت
- $$pause / لايقاف الاغنيه موقتأ
- $$resume / لاعاده تشغيل الاغنيه
  **🎮Games Commands  | اوامر الالعاب🎮**
- $$لعبه اسئله / كت تويت
- $$لاضهار بيت او شعر عن الحب / حب
- $$لاضهار بيت او شعر عن الحياه / خواطر
  **🔰Special Commads | اوامر مميزه🔰**
- $$welcomer / لتفعيل خاصيه الترحيب
- $$bigmoji / لتكبير الايموجي
- $$write / للكتابه بل ايموجي`)
message.author.sendEmbed(embed)

}
}); 


client.login(process.env.BOT_TOKEN);
