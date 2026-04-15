//
function script11050(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = comp(-1, 65535);
    switch (varbitplayer_28210) {
        case 1: {
            int3 = comp(1631, 22);
            int1 = IF_GETWIDTH(int3);
            int2 = varbitplayer_28189;
            break;
        }
        case 2: {
            int3 = comp(1631, 38);
            int1 = IF_GETWIDTH(int3);
            int2 = varbitplayer_28190;
            break;
        }
        case 3: {
            int3 = comp(1631, 42);
            int1 = IF_GETWIDTH(int3);
            int2 = varbitplayer_28191;
            break;
        }
        case 4: {
            int3 = comp(1631, 75);
            int1 = IF_GETWIDTH(int3);
            int2 = varbitplayer_28192;
            break;
        }
        default: {
            return;
        }
    };
    if ((int0 != int3)) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    var int4 = (int2 / 10);
    var int5 = (int4 + 133);
    if ((int2 >= 750)) {
        int5 = (int5 + 4);
    };
    var int6 = 0;
    if ((int1 < int5)) {
        int6 = MIN((int1 + 1), int5);
    } else if ((int1 == int5)) {
        IF_SETONTIMER(callback(), int3);
        return;
    };
    IF_SETSIZE(int6, int6, 0, 0, int3);
    return;
}