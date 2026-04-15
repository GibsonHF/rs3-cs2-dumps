//
function script2100(int0: component, int1: unknown_int): void {
    var string0 = "";
    switch (int0) {
        case 54657028:
        case 54657032:
        case 54657039: {
            string0 = "The number of times that the avatar has been killed.";
            break;
        }
        case 54657029:
        case 54657033:
        case 54657036: {
            string0 = "The Slayer level required to attack each avatar.";
            break;
        }
        case 54657030:
        case 54657034:
        case 54657035: {
            string0 = "The remaining health of each avatar.";
            break;
        }
        case 54657037:
        case 54657038: {
            string0 = "How much time the game has remaining.";
            break;
        }
        case 54657027: {
            string0 = "This column displays the blue team's statistics.";
            break;
        }
        case 54657031: {
            string0 = "This column displays the red team's statistics.";
            break;
        }
        case 54657047: {
            string0 = "Shows which team controls the soul obelisk.";
            break;
        }
        case 54657048: {
            string0 = "Shows which team controls the western graveyard.";
            break;
        }
        case 54657049: {
            string0 = "Shows which team controls the eastern graveyard.";
            break;
        }
        case 54657056: {
            string0 = "Shows how much control a team has over the soul obelisk.";
            break;
        }
        case 54657041: {
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