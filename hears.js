const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears("Aren", (ctx) => {
  ctx.reply(`aren is hearing you`);
});

bot.hears(/.nodejs./, (ctx) => {
  ctx.reply(`node js is hearing`);
});

bot.hears(/(bad|worst|idiot)/, (ctx) => {
  ctx.deleteMessage();
  ctx.reply(`Don't use ugly words`);
});

bot.launch();
