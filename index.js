const Discord = require("discord.js");

const TOKEN = "Mzg0NTExMzA1MDg1NzQ3MjEw.DPz3og.AfhE--V4KwlkKCrLSYvuSJBKFVc";
const PREFIX = "423";

var bot = new Discord.Client();

var bot,login = (TOKEN);

bot.on("ready", () => {
    console.log("i am ready!");
});      

bot.on("ready", function() {
    console.log("ready");
});

    bot.on('message', msg => {
        if (msg.content === '420') {
          msg.reply('blaze it'); 
        }
      });

          bot.on('message', msg => {
            if (msg.content === 'bot1info') {
              msg.reply('i am J MODZ04s first bot so dont judge me' );
        }
      });

      bot.on('message', msg => {
        if (msg.content === 'help') {
          msg.reply('contact J MODZ04 for help'); 
        }
      });

      bot.on('message', msg => {
        if (msg.content === 'what is your youtube') {
          msg.reply('J_MODZ04 you should go subscribe'); 
        }
      });

      bot.on('message', msg => {
        if (msg.content === 'what is your snapchat') {
          msg.reply('j_modz04 you should add me'); 
        }
      });

      bot.on('message', msg => {
        if (msg.content === 'what is your instagram') {
          msg.reply('j_modz04 you should follow me i follow back'); 
        }
      });

      bot.on('message', msg => {
        if (msg.content === '') {
          msg.reply(''); 
        }
      });

      bot.on('message', msg => {
        if (msg.content === '') {
          msg.reply(''); 
        }
      });

      bot.on('message', msg => {
        if (msg.content === '') {
          msg.reply(''); 
        }
      });

    bot.login(TOKEN);
