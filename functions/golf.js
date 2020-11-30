module.exports = {
    send_instructions: function (message) {
        message.channel.send(golf_rules);
    }
}

const golf_rules = "```md\n- 1-4 over par: 1 Drink\n- 5-9 over par: 2 Drink\n- 10+ over par: 3 Drink\n- Everyone is under par: 1 Drink\n- You are under par: Assign a Drink (at least one person is OVER par)\n- On hole 9 you check and John is playing League: 2 Drinks```"
