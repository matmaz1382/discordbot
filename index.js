// =============== const ===============
const Discord = require('discord.js');
const client = new Discord.Client();

// =============== Ready ===============
client.on('ready', () => {
      console.log('The Bot Is Ready!');
  
// =============== Status
  client.user.setPresence({
    status: 'online', //Can change to online, idle, dnd & invisible
    activity: {
        name: ` Code By - By MatinXp`,
        type: 'WATCHING', //Can change to PLAYING, LISTENING, WATCHING OR STREAMING
    }
  })
});

// ========= Auto Connection =========
//To activate this option, first activate the developer options, then insert the id of VC.
    client.on("ready", () => {
        const channel = client.channels.cache.get("Voice ID"); //here
        if (!channel) return console.error("I did not find the channel!");
        channel.join().then(connection => {
            console.log("I entered the channel");
        }).catch(e => {
            console.error(e);
        });
    });

// ========= login =========
client.login(process.env.token);

