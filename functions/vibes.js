module.exports = {
    send_vibe: function (message){
        let guild = client.guilds.get('serverID');
        let member = guild.member(message.author);
        let nickname = member ? member.displayName : null;

        adjective = enhancers[Math.floor(Math.random() * enhancers.length)];
        verb = verbs[Math.floor(Math.random() * verbs.length)];
        vibe = nickname + "is feeling " + adjective + " " + verb;
        message.channel.send(vibe);
        return;
    }
}

const demonic = 'ḑ̶̨̡̨̨̡̬͔̜͎͚͔̱̥͇̠̩̮̗̫̫̙̫̫̻̭͖̱̺͈̫̔̽̌͂́͑̓̄̔́͒̚͜ȩ̶̡̛͎̠̘̻͓͇̭͔͕̺̜̻̖̲̪̟̬͎̯̣̼̙̤̟̩͕̞̰̯͚͐̆̽̈́͋̽͛̅̎̓̿̇́̿͗͛̑̉̐̀̌͌͛̀̾́̈́̓̐̋͂͊̀̔̓̓̋̈́̓̾̏̕͘̕̕͝͠͠ͅͅm̸̡̧̨̡̛̛͚͓͖͕̙̬̖̥͉̤̰̼̮̝̙̬̲͕͉̘̱̜̖͕̭̻͚̐̉̈͒̇̓̓̎̑̈́̐͌̈́̍̐̈́̋̓̂̄̐͆̽͒̔̆̍̀͛͋͛̐͂͌̊͗̾̚͘͘͝͝͠͠o̸̡̨̢̜̥̰̻͇̲̦̭̺̘̞̟̬͍̯̹̫͒̉͋̇͂̏̃̓̈̓̌̎̒̌̉́̿̀̚̚͝ņ̵̨̱͚͙͉̥̳̞͓̩̲̦͎͎͍̣̟̥͍͚̼̤̯͈̀̿̂̕̕̕͜ȋ̵̢̛̛̛̥̜̗̣̪͔̠̺̣̝̪̞̐͒̄́̃̓͌̄̐̋̀͛͆̐͗͑̌̔̈́́̾̄̀̐͒́̏̔̓̎͋̃̋͌̀̚̚̕̕͘͠c̸̢̡̢̢̰͖̫̖͔̞͍̞̣̻̜͈̣͉̤̞̲̳̜͚͚̒̀́̔̌̈́͐̄̑̐̎̋̐̓͋̆̋̓͊̕͝'

const enhancers = [
    'alarmingly',
    'moistly',
    'kinda',
    'really',
    'very',
    'bodaciously',
    'mostly',
    'intimidatingly',
    'somewhat',
    'indisputably',
    'EXTREMELY',
    'incredibly',
    'a little',
    'sexily',
    'SUPER',
    'sorta',
    'not that',
    'weirdly',
    'everything but',
]

const verbs = [
    demonic,
    'awake',
    'anxious',
    'alone',
    'BETRAYED',
    'barren',
    'brave',
    'bodacious',
    'benevolent',
    'baby',
    'charmed',
    'cursed',
    'creative',
    'dank',
    'dry',
    'dejected',
    'delighted!',
    'depressed',
    'desperate',
    'dumb',
    'disgruntled',
    'enraged',
    'exhausted',
    'enthusiastic',
    'forlorn',
    'gay',
    'gloomy',
    'heavy',
    'happy',
    'horny',
    'homicidal',
    'heartbroken',
    'hopeless',
    'inspired',
    'jealous',
    'jittery',
    'lonely',
    'melancholy',
    'malevolant',
    'motivated',
    'moist',
    'nauseous',
    'optimistic',
    'prepared',
    'refreshed',
    'spicy',
    'straight',
    'sad',
    'squeezed',
    'serene',
    'slutty',
    'smitten',
    'strong',
    'successful',
    'tender',
    'tired',
    'tight',
    'tsundere',
    'upset',
    'understanding',
    'whimsical',
    'violent',
    'vindictive',
    'yandere',
    'yeah...',
]
