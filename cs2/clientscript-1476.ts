//
function script1476(int0: component, int1: int): void {
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
            stack(enum_getvalue(0, 23, int3, 0));
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        case 3186: {
            stack(enum_getvalue(0, 23, int3, 1));
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        case 3187: {
            stack(enum_getvalue(0, 23, int3, 2));
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        case 3188: {
            stack(enum_getvalue(0, 23, int3, 3));
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        case 3189: {
            stack(enum_getvalue(0, 23, int3, 4));
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        case 3190: {
            stack(enum_getvalue(0, 23, int3, 5));
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        case 3191: {
            stack(enum_getvalue(0, 23, int3, 6));
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
        case 3192: {
            stack(enum_getvalue(0, 23, int3, 7));
            stack(int0);
            IF_SETGRAPHIC();
            break;
        }
    };
    return;
}