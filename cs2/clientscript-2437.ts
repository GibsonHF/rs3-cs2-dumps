//
function script2437(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    switch (varclient_816) {
        case 0: {
            return;
        }
        case 1: {
            int2 = varclient_817;
            break;
        }
        case 2: {
            int2 = SCALE(varclient_817, 125, 100);
            break;
        }
        case 3: {
            int2 = SCALE(varclient_817, 150, 100);
            break;
        }
        default: {
            int2 = SCALE(varclient_817, 175, 100);
            break;
        }
    };
    if ((int2 > 100)) {
        int2 = 100;
    };
    IF_SETSIZE(IF_GETWIDTH(comp(15, 1)), SCALE(int2, 100, IF_GETHEIGHT(comp(15, 2))), 0, 0, comp(15, 1));
    return;
}