const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use((ctx, next) => {
  const msg = ctx.message.text;
  if (msg == "aren") return next();
  return ctx.reply("message should be aren");
});

bot.hears('aren' , (ctx) => {
    ctx.reply("Welcome Aren!")
})

bot.launch();
