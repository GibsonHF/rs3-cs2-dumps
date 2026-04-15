//
function script11031(int0: unknown_int, int1: unknown_int): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = 0;
    switch (int1) {
        case 1: {
            int2 = comp(1631, 22);
            int3 = comp(1631, 32);
            int4 = varbitplayer_28189;
            break;
        }
        case 2: {
            int2 = comp(1631, 38);
            int3 = comp(1631, 17);
            int4 = varbitplayer_28190;
            break;
        }
        case 3: {
            int2 = comp(1631, 42);
            int3 = comp(1631, 83);
            int4 = varbitplayer_28191;
            break;
        }
        case 4: {
            int2 = comp(1631, 75);
            int3 = comp(1631, 92);
            int4 = varbitplayer_28192;
            break;
        }
        default: {
            return;
        }
    };
    var int5 = (int4 / 10);
    var int6 = (int5 + 133);
    if ((int4 >= 750)) {
        int6 = (int6 + 4);
    };
    IF_SETSIZE(int6, int6, 0, 0, int2);
    IF_SETTEXT(inttostring(int4, 10), int3);
    return;
}