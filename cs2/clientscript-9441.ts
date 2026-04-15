//
function script9441(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    switch (int0) {
        case 47054873: {
            int1 = varclient_3860;
            break;
        }
        case 47054882: {
            int1 = varclient_3861;
            break;
        }
        case 47054891: {
            int1 = varclient_3862;
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 <= 0)) {
        IF_SETHIDE(true, int0);
    } else {
        if ((int1 >= varclient_3867)) {
            int2 = 80;
        } else {
            int2 = (SCALE(int1, varclient_3867, 73) + 7);
        };
        IF_SETHIDE(false, int0);
        if ((int2 > 80)) {
            int2 = 80;
        };
        if ((int2 < 7)) {
            int2 = 7;
        };
        IF_SETSIZE(int2, IF_GETHEIGHT(int0), 0, 0, int0);
    };
    return;
}