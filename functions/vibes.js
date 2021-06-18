
module.exports = {
    send_vibe: function (message){
        if(Math.random() > 0.96){
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
    vibe = vibe.replace(/\s+/g,' ');
    message.channel.send(vibe);
    message.delete();
    return;
}

function variant2(message){
    const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    vibe = "<@" + message.author.id + ">" + " is feeling " + scenario;
    message.channel.send(vibe);
    message.delete();
}

const demonic = 'ḑ̶̨̡̨̨̡̬͔̜͎͚͔̱̥͇̠̩̮̗̫̫̙̫̫̻̭͖̱̺͈̫̔̽̌͂́͑̓̄̔́͒̚͜ȩ̶̡̛͎̠̘̻͓͇̭͔͕̺̜̻̖̲̪̟̬͎̯̣̼̙̤̟̩͕̞̰̯͚͐̆̽̈́͋̽͛̅̎̓̿̇́̿͗͛̑̉̐̀̌͌͛̀̾́̈́̓̐̋͂͊̀̔̓̓̋̈́̓̾̏̕͘̕̕͝͠͠ͅͅm̸̡̧̨̡̛̛͚͓͖͕̙̬̖̥͉̤̰̼̮̝̙̬̲͕͉̘̱̜̖͕̭̻͚̐̉̈͒̇̓̓̎̑̈́̐͌̈́̍̐̈́̋̓̂̄̐͆̽͒̔̆̍̀͛͋͛̐͂͌̊͗̾̚͘͘͝͝͠͠o̸̡̨̢̜̥̰̻͇̲̦̭̺̘̞̟̬͍̯̹̫͒̉͋̇͂̏̃̓̈̓̌̎̒̌̉́̿̀̚̚͝ņ̵̨̱͚͙͉̥̳̞͓̩̲̦͎͎͍̣̟̥͍͚̼̤̯͈̀̿̂̕̕̕͜ȋ̵̢̛̛̛̥̜̗̣̪͔̠̺̣̝̪̞̐͒̄́̃̓͌̄̐̋̀͛͆̐͗͑̌̔̈́́̾̄̀̐͒́̏̔̓̎͋̃̋͌̀̚̚̕̕͘͠c̸̢̡̢̢̰͖̫̖͔̞͍̞̣̻̜͈̣͉̤̞̲̳̜͚͚̒̀́̔̌̈́͐̄̑̐̎̋̐̓͋̆̋̓͊̕͝'

const enhancers = [
    'alarmingly',
    'ambitiously',
    'a little',
    'bodaciously',
    'criminally',
    'emotionally',
    'everything but',
    'extensively',
    'EXTREMELY',
    'grotesquely',
    'incredibly',
    'indisputably',
    'intimidatingly',
    'kinda',
    'moistly',
    'morbidly',
    'mostly',
    'not that',
    'physically',
    'really',
    'ravenously',
    'sexily',
    'secretly',
    'somewhat',
    'sorta',
    'SUPER',
    'very',
    'weirdly',
    '',
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
    'confused',
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
    'fuzzy',
    'gay',
    'gloomy',
    'heavy',
    'happy',
    'homicidal',
    'hydrophobic',
    'heartbroken',
    'hopeless',
    'inspired',
    'jealous',
    'jittery',
    'lonely',
    'lightheaded and that\'s it',
    'melancholy',
    'malevolent',
    'motivated',
    'moist',
    'nauseous',
    'optimistic',
    'prepared',
    'pregnant',
    'refreshed',
    'rotund',
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
    'slimy',
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
    "they should probably clean their reusable toilet paper soon",
    "like they're 2 shots from drinking a pound of meth and doing a kickflip over the empire state building",
    "kinda raNdOm xD uwu",
    "like a worm in the dirt after it just rained",
    "smitten thanks to a floating gorgon head",
    "a desperate longing for some gamergirl bathwater to be injected into their gaming energy mix",
    "like their insanity levels are slowly rising...",
    "eat a potato",
    "like 12 gnomes with a shared exoskeleton",
    "like Vienna's father",
    "empty, there are no more vibes",
    "_____. Determining emotions is trivial and has been left as an excercise to the reader.",
    "an overwhelming love for Luna Park.",
    "verbose and erudite",
    "swallowed a whole grape, and now their throat feels weird.",
    "dead inside.",
    "like they need a good **** **** ****!",
    "a little bit creamy",
    "in the mood to have some bee milk in their tea.",
    "like their toes could use a good suckin' right 'bout now.",
    "absolutely stuffed, just filled to the brim; no more would fit.",
    "like a moist towlette on a tuesday afternoon",
    "a little uuugghhhnnanhahahhnnnnnnnuuhhhhgghhghhhnnuuuuuuuvvvnnnunnunghhhnguhnguhnhhnhnghughnugnhguhnughnnhnnnnnnhhghghgh",
    "",
    "less pious than the pope, but more than their local mp.",
    "like they want to share a twinkie with their three closest friends",
    "like they need to bleach their hair and change their name to susan",
    "like they wish to be swept away by a strange man in a fur coat to a remote village where they will make passionate dinosaur puppets with a flashlight together for a night, and then never see each other again.",
];