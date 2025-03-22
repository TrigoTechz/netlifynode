const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

// Handle the /start command with a personalized welcome
bot.start((ctx) => {
  const userName = ctx.from.first_name || 'User'; // Fallback to 'User' if no first name
  ctx.reply(`Hello, ${userName}! Welcome to the bot!`);
});

// Handle incoming text messages (optional, for demo purposes)
bot.on('text', (ctx) => {
  ctx.reply('Hello from Netlify!');
});

// Netlify Function handler
exports.handler = async (event, context) => {
  try {
    // Parse the incoming Telegram update
    const body = JSON.parse(event.body);
    
    // Process the update with Telegraf
    await bot.handleUpdate(body);
    
    // Return a 200 status to acknowledge receipt
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Update processed' }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to process update' }),
    };
  }
};
