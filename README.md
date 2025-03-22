# Telegram Bot on Netlify

A simple Telegram bot hosted on Netlify using Netlify Functions. It sends a personalized welcome message when a user starts the bot.

## Setup Instructions

1. **Create a Telegram Bot**:
   - Talk to `@BotFather` on Telegram to create a bot and get your `TELEGRAM_BOT_TOKEN`.

2. **Install Dependencies**:
   - Run `npm install` in the project directory.

3. **Deploy to Netlify**:
   - Push this code to a Git repository (e.g., GitHub).
   - Connect the repository to Netlify via the Netlify dashboard.
   - Set the environment variable `TELEGRAM_BOT_TOKEN` in Netlify (Site Settings > Build & Deploy > Environment).

4. **Set the Webhook**:
   - After deployment, get your function URL (e.g., `https://your-site-name.netlify.app/.netlify/functions/bot`).
   - Set the Telegram webhook:
