const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.telegram.sendMessage(
    ctx.chat.id,
    `Welcome ${ctx.chat.first_name}, let's start`
  );
});

bot.help((ctx) => {
  ctx.reply(`If you need help you can read the desctiption.`);
});

bot.settings((ctx) => {
  ctx.reply(`Here is the settings list which you can use`);
});

bot.launch();
