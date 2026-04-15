//
function script10271(int0: int): [string, string, string] {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    switch (int0) {
        case 1: {
            string2 = "Minimum skill level required to join group.";
            break;
        }
        case 2: {
            [string2, string0, string1] = ["Hard mode.", "Disable hard mode.", "Enable hard mode."];
            break;
        }
        case 3: {
            [string2, string0, string1] = ["Staked match.", "Change to friendly match,", "Change to staked match."];
            break;
        }
        case 4: {
            string2 = "Maximum players for group.";
            break;
        }
        case 5: {
            string2 = "Lootshare settings.";
            break;
        }
        case 6: {
            string2 = "Require a minimum of 10 kills.";
            break;
        }
        case 100: {
            string2 = "The selected role will have 2 players.";
            break;
        }
        case 101: {
            string2 = "Minimum role level.";
            break;
        }
        case 102: {
            string2 = "Wave to start playing.";
            break;
        }
        case 103: {
            string2 = "Floor theme.";
            break;
        }
        case 104: {
            string2 = "Complexity level.";
            break;
        }
        case 105: {
            string2 = "Group size.";
            break;
        }
        case 106: {
            string2 = "Floor size.";
            break;
        }
        case 107: {
            [string2, string0, string1] = ["Killcount required.", "Don't require killcount.", "Require killcount."];
            break;
        }
        case 108: {
            [string2, string0, string1] = ["Already in God Wars Dungeon.", "Don't need to be in the God Wars Dungeon.", "Must be in the God Wars Dungeon."];
            break;
        }
        case 109: {
            [string2, string0, string1] = ["Previously killed Vorago.", "Don't need to have killed Vorago previously.", "Must have killed Vorago previously."];
            break;
        }
        case 110: {
            string2 = "Lander difficulty.";
            break;
        }
        case 112: {
            [string2, string0, string1] = ["'Rocking Out' quest complete.", "Don't need to have completed the 'Rocking Out' quest.", "Must have completed the 'Rocking Out' quest."];
            break;
        }
        case 113: {
            [string2, string0, string1] = ["Combat games.", "Play combat games.", "Play non-combat games."];
            break;
        }
        case 114: {
            string2 = "Game to play.";
            break;
        }
        case 115: {
            string2 = `Slayer task: ${varclient_4501}`;
            break;
        }
        case 116: {
            string2 = `Slayer master: ${script10499(varbitplayer_9072)}`;
            break;
        }
        case 117: {
            [string2, string0, string1] = ["Frozen key required.", "Don't require charged frozen key.", "Require charged frozen key."];
            break;
        }
        case 118: {
            string2 = "Lowest boss to queue for.";
            break;
        }
    };
    return [string2, string0, string1];
}