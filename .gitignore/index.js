const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setGame("Strike, ²help");
    console.log("Le bot a bien été connecté");
})

bot.login("NjI0OTU2NDk4MTQwODU2MzMw.XYYjcQ.kPJftK1_wBOSr466FDko57fpAjE");
