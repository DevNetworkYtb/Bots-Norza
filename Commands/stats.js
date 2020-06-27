const Discord = require("discord.js");
const moment = require("moment");
const message = require("../Events/message");

module.exports.run = async(client, message, args) => {
    const membre = message.mentions.message.first() || message.member;
    
    let embedstat = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setTitle("Statistique de l'utilisateur **" + membre.user.tag + "**")
    .addField(" ID : ", membre.id)
    .addField("Créer le :", moment.utc(membre.user.createdAT).format("LLL"))
    .addField("A rejoind le :", moment.utc(membre.joinAT).format("LL"))
    .setThumbnail(membre.user.displayAvatarURL)
    .setFooter("Informatiuon de l'utilisateur " + membre.user.username)
    .setTimestamp()

    message.channel.send(embedstat)
};

module.exports.help = {
    name: "stats"
}