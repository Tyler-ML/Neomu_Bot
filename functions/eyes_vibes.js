module.exports = {
    send_eyes_vibe: function (message){
        message.channel.send(get_at_index(vibes, getRandomInt(total_vibes)));
        return;
    }
}

const vibes = [
    ['Your eyes hurt.', 50],
    ['Your eyes are in pain.', 25],
    ['Your eyes feel like they\'re bleeding', 24],
    ['Your eyes feel really good', 1]
]

const total_vibes = sumValues(vibes)

function sumValues(list){
    var sum = 0
    list.forEach((a, b) => {
        sum += a[1]
    })
    return sum;
}

function get_at_index(vibes, target){
    i = 0;
    while(i < vibes.length){
        if(vibes[i][1] > target){
            return vibes[i][0];
        }
        i++;
    }
    return vibes[0][0];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
