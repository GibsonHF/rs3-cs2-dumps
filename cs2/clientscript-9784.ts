//
function script9784(int0: int): [string, string, boolean] {
    var int0 = script15861(int0);
    if ((int0 == -1)) {
        return ["", "", true];
    };
    var string0 = script15897(int0);
    var string1 = inttostring(int0, 10);
    var string2 = `${string0}<br><br>Load this preset and close the bank interface.`;
    var int1 = false;
    var int2 = 0;
    switch (int0) {
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15: {
            if ((PLAYERMEMBER() == false)) {
                string2 = "This slot is only available to members.";
                int1 = true;
            };
            break;
        }
        case 19: {
            string1 = "";
            if ((MAP_MEMBERS() == 0)) {
                string2 = "A beast of burden preset can only be loaded on members' worlds.";
                int1 = true;
            };
            break;
        }
        case 100: {
            string1 = "";
            int2 = (script15926() + 1);
            string2 = `Go to preset page ${inttostring(int2, 10)} of ${inttostring(2, 10)}.`;
            break;
        }
        case 0: {
            string1 = "";
            string2 = "Open the preset settings.";
            break;
        }
    };
    return [string1, string2, int1];
}