const commands = {
    'prefix': '#',
    'help': 'a list of commands.',
    'vibe': 'check the vibe in the server.',
    'greet': 'greet the members of the server!',
    'golf': 'gives you the rules for drinking golf :)',
    'nty': 'spams the chat with | to bury awful messages.',
}

const users = {
    'john': '183381210272235521',
    'tyler': '182910137437126656',
    'alexia': '351529729372717086',
}

module.exports = {
    send_help: function (message) {
        if(message.author.id === users['john']){
            message.channel.send("Try typing #help to receive useful help messages!");
        }else if(message.author.id === users['tyler']){
            message.channel.send("<:smile:>");
            message.channel.send("<@" + message.author.id + ">");
        }else{
            var info = '```md\n';
            for (var key in commands) {
                info += '- '
                info += key
                info += ': '
                info += commands[key]
                info += "\n"
            }
            info += '```';
            message.channel.send(info);
        }
    }
}