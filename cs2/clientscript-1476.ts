//
function script1476(int0: number, int1: number): void {
    IF_SETCOLOUR(int1, int0);
    var int2 = IF_GETGRAPHIC(int0);
    var int3 = -1 as cs2enum;
    switch (int1) {
        case 16297984: {
            int3 = enum_getvalue(0, 26, 15720 as cs2enum, varbitplayer_27443);
            break;
        }
        case 4737145: {
            int3 = enum_getvalue(0, 26, 15720 as cs2enum, varbitplayer_27444);
            break;
        }
        case 1842218: {
            int3 = enum_getvalue(0, 26, 15720 as cs2enum, varbitplayer_27445);
            break;
        }
        case 9800823: {
            int3 = enum_getvalue(0, 26, 15720 as cs2enum, varbitplayer_27446);
            break;
        }
    };
    switch (int2) {
        case 3185: {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int3, 0), int0);
            break;
        }
        case 3186: {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int3, 1), int0);
            break;
        }
        case 3187: {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int3, 2), int0);
            break;
        }
        case 3188: {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int3, 3), int0);
            break;
        }
        case 3189: {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int3, 4), int0);
            break;
        }
        case 3190: {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int3, 5), int0);
            break;
        }
        case 3191: {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int3, 6), int0);
            break;
        }
        case 3192: {
            IF_SETGRAPHIC(enum_getvalue(0, 23, int3, 7), int0);
            break;
        }
    };
    return;
}