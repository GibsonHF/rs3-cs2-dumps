//
function script6121(int0: int): void {
    var string0 = "";
    switch (int0) {
        case 0: {
            string0 = "Kill them all!";
            break;
        }
        case 1: {
            string0 = "Kill the enemies until reinforcements stop coming!";
            break;
        }
        case 2: {
            string0 = "Everything is dead! Marmaros has stopped fighting too.";
            break;
        }
        case 3: {
            string0 = "Kill that boss!";
            break;
        }
        case 4: {
            string0 = "The boss has legged it with your sword - get him!";
            break;
        }
        case 5: {
            string0 = "Kill more enemies than Marmaros to be the best brother!";
            break;
        }
        default: {
            string0 = `Unexpected value ${inttostring(int0, 10)}.`;
            break;
        }
    };
    if ((strcmp(string0, IF_GETTEXT(comp(621, 34))) == 0)) {
        return;
    };
    var int1 = STRINGWIDTH(string0, 66 as fontmetrics);
    IF_SETSIZE(int1, 32, 0, 0, comp(621, 34));
    IF_SETSIZE((int1 + 64), 28, 0, 0, comp(621, 11));
    IF_SETTEXT(string0, comp(621, 34));
    return;
}