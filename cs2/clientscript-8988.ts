//
function script8988(): [string, string, string] {
    switch (script8983()) {
        case 1: {
            return ["Damage dealt to rival faction's minions is increased by 10%.", "Damage received from rival faction's minions is decreased by 15%.", "Vote to choose which buff you will receive when doing battle with the rival faction's minions."];
        }
        case 3: {
            return ["Chance to spawn an additional special unit.", "Increase the effect of the special abilities of special units, for your faction, by 50%.", "Vote to choose which buff your faction's special units will receive."];
        }
        case 5: {
            return ["Increase divine tears gained from the battlefield by 5%.", "Increase divine tears gained from outside the battlefield by 5%.", "Vote to choose which buff your faction will receive towards earning divine tears."];
        }
        case 7: {
        }
        default: {
            return ["There is no vote currently available.", "There is no vote currently available.", "There is no vote currently available. Come back soon."];
        }
    };
    return ["Add a 5% discount to rewards purchased from the shop.", "Increase the chance of receiving a rare drop from the battlefield by 5%.", "Vote to choose which buff you receive towards gaining rewards from this event."];
}