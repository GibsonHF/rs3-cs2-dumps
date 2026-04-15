//
function script8989(): [string, string, string] {
    if ((script8984() == 1)) {
        return ["New minions will be brought into the battlefield. Which would you like to see?", "Heroes. 50% chance of spawning and have 50% more lifepoints than normal minions. Provide a small healing buff to allied players nearby.", "Siege units. 10% chance of spawning and deal 100% more damage. Bombard the battlefield harming enemy units and players."];
    };
    if ((script8984() == 3)) {
        return ["New minions will be brought into the battlefield. Which would you like to see?", "Siege units. 10% chance of spawning and deal 100% more damage. Bombard the battlefield harming enemy units and players.", "Elites. Elites have a 25% chance of spawning and deal 200% more damage than normal units and have 200% more life points. Additionally they have an AoE stun attack to disrupt enemy players."];
    };
    return ["", "", ""];
}