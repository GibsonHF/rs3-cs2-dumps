//
function script4446(int0: unknown_int, int1: struct): string {
    switch (int0) {
        case 0: {
            return "Knock knock - Interact with the Ardougne wall door.";
        }
        case 1: {
            return "Doctor's visit - Talk to Hans while wearing the gas mask.";
        }
        case 2: {
            return "Cure the infection - Create an antipoison.";
        }
        case 3: {
            return `Right to the source -  Kill 30 giant rats in the Stronghold of Security - ${inttostring(script5542(int1, 3), 10)}/${inttostring(30, 10)}`;
        }
        case 4: {
            return "An apple a day - Harvest an apple from an apple tree.";
        }
        case 5: {
            return `Animal Clinic - Feed animals medicinal honeycomb at the Manor Farm - ${inttostring(script5542(int1, 5), 10)}/${inttostring(5, 10)}`;
        }
        case 6: {
            return `This sucks - Create 24 bloated leech pouches - ${inttostring(script5542(int1, 6), 10)}/${inttostring(24, 10)}`;
        }
        case 7: {
            return "You should probably get that checked - Defeat the Giant mole.";
        }
        case 8: {
            return "Ahead of the Game - Complete a soul reaper assignment.";
        }
        case 9: {
            return `Medical logs - Cut 50 blisterwood logs - ${inttostring(script5542(int1, 9), 10)}/${inttostring(50, 10)}`;
        }
        case 10: {
            return `Chief Sturgeon - Catch 50 leaping sturgeon - ${inttostring(script5542(int1, 10), 10)}/${inttostring(50, 10)}`;
        }
        case 11: {
            return `Just part of the job - Burn 25 vyre corpses - ${inttostring(script5542(int1, 11), 10)}/${inttostring(25, 10)}`;
        }
        case 12: {
            return `Regular exercise - ${inttostring(script5542(int1, 12), 10)}/${inttostring(25, 10)} laps of Hefin Agility Course completed.`;
        }
        case 13: {
            return "Always read the label - Create a Strong Cure Potion in Daemonheim.";
        }
        case 14: {
            return "Home Remedy - Fetch items for the Plague Doctor :<br>1x 6 dose Overload Salve<br>1x Divine herb path III<br>1x Empty Birds Nest<br>200x Harmonic Dust<br>10x Wallasalkibanite ore<br>1x Sack full of Potatoes";
        }
        case 15: {
            return `Crimson Skillchompas : Catch 200 Crimson Skillchompas - ${inttostring(script5542(int1, 15), 10)}/${inttostring(200, 10)}`;
        }
    };
    return "";
}