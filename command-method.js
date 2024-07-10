const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.start((ctx) => {
//   ctx.telegram.sendMessage(
//     ctx.chat.id,
//     `Welcome ${ctx.chat.first_name}, let's start`
//   );
// });

// bot.help((ctx) => {
//   ctx.reply(`If you need help you can read the desctiption.`);
// });

// bot.settings((ctx) => {
//   ctx.reply(`Here is the settings list which you can use`);
// });

//customize commands
bot.command("start", (ctx) => {
  ctx.reply(`Welcome ${ctx.chat.first_name}, let's start`);
});

bot.command("help", (ctx) => {
  ctx.reply(`If you need help you can read the desctiption.`);
});

bot.command(["settings", "setting", "Setting", "tools"], (ctx) => {
  ctx.reply(`
  Here is the settings list which you can use:
  1 - Name
  2 - Username
  3 - Password
  `);
});

bot.command("extra", (ctx) => {
  ctx.reply(`Extra explanation `);
});

bot.command("ctx", (ctx) => {
  const { from, chat, message, botInfo } = ctx;
  console.log(JSON.stringify({ from, chat, message, botInfo }));
  ctx.reply(`Logged some useful info about bot`);
});

bot.launch();
