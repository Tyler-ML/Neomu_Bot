const vibe = require('./functions/vibes');
const golf = require('./functions/golf');
const greet = require('./functions/greetings');
const nty = require('./functions/nty');
const help = require('./functions/help');
const eyes_vibes = require('./functions/eyes_vibes');
const experience= require('./functions/experience');


const { Client } = require('discord.js');
const client = new Client();

const prefix = "#";

const commands = {
    'greet': greet.send_greeting,
    'vibe': vibe.send_vibe,
    'golf': golf.send_instructions,
    'nty': nty.send_wall,
    'help': help.send_help,
    'eyes_vibe': eyes_vibes.send_eyes_vibe,
}

client.on('message', message => {
    if(message.author.bot) return;
    if(message.channel.id == "855476882186829855") return
    if(message.channel.id == "331243505361879042") return

    //Sexy Shrek
    if(Math.random() * 100000 == 420){
        message.channel.send("https://tenor.com/view/shrek-dance-sexy-smile-happy-gif-17251010");
    }

    if(!message.content.startsWith(prefix)) return;
    
    //Mandated Break
    const date = new Date()
    if(date.getHours() == 17 && date.getMinutes() < 15){
        message.channel.send("Sorry, I'm on my union mandated break. Talk to me again at 17:15.");
        return;
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(Object.keys(commands).includes(command)){
        commands[command](message);
    }else{
        message.channel.send("Look at you, you absolute buffoon, you complete idiot, that isn't even a command!");
    }
});

client.once('ready', () => { 
    console.log("Bot Initiated.")
    client.user.setActivity("with ur heart");
});

client.login(process.env.DISCORD_TOKEN);
