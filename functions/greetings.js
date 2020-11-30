module.exports = {
    send_greeting: function (message) {
        message.channel.send(responses[Math.floor(Math.random() * responses.length)]);
    }
}

const responses = [
    'Greetings earthlings',
    'My dearest beloved fuckos',
    'Esteemed Bastards',
    'Gentlefolk, Ferals, and Domesticated Cryptids',
    'My fellow yees and haws...',
    'What\'s up, rat bastards',
    'Hello Cowards',
    'What\'s the word, baby birds',
    'Hello, my sweet summer children',
    'Avast, m\'hearties',
    'What it do, baby?',
    'Listen up, fives. A ten is speaking',
    'Hello friends and enemies',
    'What\'s up, Demons? it\'s me, ya boy'
    ]
    