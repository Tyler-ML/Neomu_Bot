module.exports = {
    send_vibe: function (message){
        if(Math.random() > 0.90){
            variant2(message);
        }else{
            variant1(message);
        }
        return;
    }
}

function variant1(message){
    adjective = enhancers[Math.floor(Math.random() * enhancers.length)];
    verb = verbs[Math.floor(Math.random() * verbs.length)];
    vibe = "<@" + message.author.id + ">" + " is feeling " + adjective + " " + verb;
    message.channel.send(vibe);
    return;
}

function variant2(message){
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    vibe = "<@" + message.author.id + ">" + " is feeling " + scenario;
    message.channel.send(vibe);

}

const demonic = 'ḑ̶̨̡̨̨̡̬͔̜͎͚͔̱̥͇̠̩̮̗̫̫̙̫̫̻̭͖̱̺͈̫̔̽̌͂́͑̓̄̔́͒̚͜ȩ̶̡̛͎̠̘̻͓͇̭͔͕̺̜̻̖̲̪̟̬͎̯̣̼̙̤̟̩͕̞̰̯͚͐̆̽̈́͋̽͛̅̎̓̿̇́̿͗͛̑̉̐̀̌͌͛̀̾́̈́̓̐̋͂͊̀̔̓̓̋̈́̓̾̏̕͘̕̕͝͠͠ͅͅm̸̡̧̨̡̛̛͚͓͖͕̙̬̖̥͉̤̰̼̮̝̙̬̲͕͉̘̱̜̖͕̭̻͚̐̉̈͒̇̓̓̎̑̈́̐͌̈́̍̐̈́̋̓̂̄̐͆̽͒̔̆̍̀͛͋͛̐͂͌̊͗̾̚͘͘͝͝͠͠o̸̡̨̢̜̥̰̻͇̲̦̭̺̘̞̟̬͍̯̹̫͒̉͋̇͂̏̃̓̈̓̌̎̒̌̉́̿̀̚̚͝ņ̵̨̱͚͙͉̥̳̞͓̩̲̦͎͎͍̣̟̥͍͚̼̤̯͈̀̿̂̕̕̕͜ȋ̵̢̛̛̛̥̜̗̣̪͔̠̺̣̝̪̞̐͒̄́̃̓͌̄̐̋̀͛͆̐͗͑̌̔̈́́̾̄̀̐͒́̏̔̓̎͋̃̋͌̀̚̚̕̕͘͠c̸̢̡̢̢̰͖̫̖͔̞͍̞̣̻̜͈̣͉̤̞̲̳̜͚͚̒̀́̔̌̈́͐̄̑̐̎̋̐̓͋̆̋̓͊̕͝'

const enhancers = [
    'alarmingly',
    'a little',
    'bodaciously',
    'criminally',
    'emotionally',
    'everything but',
    'extensively',
    'EXTREMELY',
    'incredibly',
    'indisputably',
    'intimidatingly',
    'kinda',
    'moistly',
    'mostly',
    'not that',
    'physically',
    'really',
    'sexily',
    'somewhat',
    'sorta',
    'SUPER',
    'very',
    'weirdly',
]

const verbs = [
    demonic,
    'awake',
    'anxious',
    'alone',
    'absorbant',
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
    'dehydrated',
    'depressed',
    'desperate',
    'dumb',
    'drained',
    'disgruntled',
    'enraged',
    'exhausted',
    'extended',
    'enthusiastic',
    'forlorn',
    'gay',
    'gloomy',
    'heavy',
    'happy',
    'horny',
    'homicidal',
    'hyrophobic',
    'heartbroken',
    'hopeless',
    'inspired',
    'jealous',
    'jittery',
    'lonely',
    'lightheaded and that\'s it',
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
    'sentient',
    'stinky',
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

const scenarios = [
    "on top of the world!",
    "under the weather",
    "like they could really use a nap.",
    "better than they've felt in many moons tbh",
    "worse than they've felt in many moons tbh",
    "like a cool cat",
    "dank 😎",
    "like listening to bustin on repeat for 14 hours straight",
    "higher than a kite",
    "sticky, but in a good way.",
    ". (or so I'm told)",
    "lucky!",
    "like they're 2 shots from drinking a pound of meth and doing a kickflip over the empire state building",
    "kinda raNdOm xD uwu",
    "like a worm in the dirt after it just rained",
    "smitten thanks to a floating gorgon head",
    "a desperate longing for some gamergirl bathwater to be injected into their gaming energy mix",
];