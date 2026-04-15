//
function script2091(int0: component): void {
    var string0 = "";
    if ((varbitplayer_5144 == 1)) {
        return;
    };
    switch (int0) {
        case 54788105:
        case 54788109:
        case 54788116: {
            string0 = "The number of times that the avatar has been killed.";
            break;
        }
        case 54788106:
        case 54788110:
        case 54788113: {
            string0 = "The Slayer level required to attack each avatar.";
            break;
        }
        case 54788107:
        case 54788111:
        case 54788112: {
            string0 = "The remaining health of each avatar.";
            break;
        }
        case 54788114:
        case 54788115: {
            string0 = "How much time the game has remaining.";
            break;
        }
        case 54788104: {
            string0 = "This column displays the blue team's statistics.";
            break;
        }
        case 54788108: {
            string0 = "This column displays the red team's statistics.";
            break;
        }
        case 54788096: {
            string0 = "Shows which team controls the soul obelisk.";
            break;
        }
        case 54788097: {
            string0 = "Shows which team controls the western graveyard.";
            break;
        }
        case 54788098: {
            string0 = "Shows which team controls the eastern graveyard.";
            break;
        }
        case 54788124: {
            string0 = "Shows how much control a team has over the soul obelisk.";
            break;
        }
        case 54788126: {
            string0 = "Shows how much control a team has over the eastern graveyard.";
            break;
        }
        case 54788125: {
            string0 = "Shows how much control a team has over the western graveyard.";
            break;
        }
        case 54788118: {
            string0 = "Shows how active you have been during the game.";
            break;
        }
        default: {
            return;
        }
    };
    script8800(string0, int0, -1);
    return;
}