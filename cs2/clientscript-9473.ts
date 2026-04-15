//
function script9473(): [string, string, string] {
    switch (script9471()) {
        case 1: {
            return ["Improved diviner gather rate: A 10% increase in the amount of divine resources your faction's diviners collect, for every gather action they perform.", "Increased caravan capacity: A 10% increase in the amount of divine resources that can be collected by a convoy.", "Vote to choose which buff your faction's convoys will receive."];
        }
        case 3: {
            return ["Increased caravan life points: A 10% increase in the life points of caravan units within your faction's convoys.", "Increased bodyguard damage: A 50% increase in the damage dealt to enemies, by your faction's bodyguards.", "Vote to choose which buff your faction's convoys will receive."];
        }
        case 5: {
            return ["Improved player healing rate: A 10% increase in the amount a player can heal their faction's bodyguard and caravan units.", "Improved player gather rate: A 10% increase in the amount of divine resources a player can contribute to their faction's convoy.", "Vote to choose which buff player members of your faction will receive."];
        }
        case 7: {
        }
        default: {
            return ["There is no vote currently available.", "There is no vote currently available.", "There is no vote currently available. Come back soon."];
        }
    };
    return ["Increased building resilience: A 15% increase in the initial resilience of buildings constructed by your faction.", "Improved building effects: Buildings constructed by your faction will have a boost to their effects.", "Vote to choose which buff your faction's buildings will receive."];
}