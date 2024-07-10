const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.hears("Aren", (ctx) => {
  ctx.reply(`Aren is hearing you`);
});

bot.hears(/.nodejs./, (ctx) => {
  ctx.reply(`Node.js is hearing`);
});

bot.hears(/(bad|worst|idiot)/, async (ctx) => {
  try {
    await ctx.deleteMessage();
    ctx.reply(`Don't use ugly words`);
  } catch (error) {
    console.error(`Failed to delete message: ${error.message}`);
    ctx.reply(`Don't use ugly words, but I couldn't delete your message.`);
  }
});

bot.launch();
