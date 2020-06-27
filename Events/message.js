const Discord = require("discord.js");
let prefix = "§";
let namebots = "Norza"

module.exports = async(client, message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ + /g);
    const commands = args.shift();

    const cmd = client.commands.get(commands);

    if (!cmd) return;

    cmd.run(client, message, args);
};