//
function script15608(int0: unknown_int): void {
    var int1 = -1;
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int1 = script20335(1);
            int2 = comp(906, 95);
            break;
        }
        case 2: {
            int1 = script20335(2);
            int2 = comp(906, 96);
            break;
        }
        case 3: {
            int1 = script20335(3);
            int2 = comp(906, 97);
            break;
        }
        default: {
            return;
        }
    };
    if ((int1 > 0)) {
        if ((varbitplayer_58378 == 1)) {
            IF_TRIGGEROP(int2, 0, 1);
        } else {
            IF_TRIGGEROP(int2, -1, 1);
        };
    };
    return;
}