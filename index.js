const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const message = require("./Events/message");

client.login(config.token)

client.commands = new Discord.Collection();

fs.readdir("./Commands/", (error, f) => {
     if (error) console.log(error);

     let commands = f.filter(f => f.split(".").pop() === "js");

     if (commands.length <= 0) return console.log("Aucune Commande Trouver !!");

     commands.forEach((f) => {
          let commande = require(`./Commands/${f}`);
          console.log(`${f} Commmande Chargée`);

     client.commands.set(commande.help.name, commande);     
     });
});

fs.readdir("./Events/", (error, f) => {
     if (error) console.log(error);
     console.log(`${f.length} Events en chargement`);

     f.forEach((f) => {
          const events = require(`./Events/${f}`);
          const event = f.split(".")[0];

          client.on(event, events.bind(null, client));
     })
});