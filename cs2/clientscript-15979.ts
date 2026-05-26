//
function script15979(int0: number, int1: number, int2: number, int3: number): void {
    if (((IF_GETHIDE(96797459) == 0) && (script6354(93847555) == 1))) {
        return;
    };
    if (((script15532(0) == 1) || (varbitplayer_27169 == 1))) {
        return;
    };
    if ((varclient_3467 != -1)) {
        return;
    };
    if (((int2 == -1) || (int0 == -1))) {
        return;
    };
    var int4 = struct_getparam(int2, 3481);
    if ((int4 == -1 as cs2enum)) {
        return;
    };
    var int5 = ENUM_GETOUTPUTCOUNT(int4);
    if ((int5 == 0)) {
        return;
    };
    var int6 = 1;
    if ((int4 == 7704 as cs2enum)) {
        int6 = 2;
        if ((script19316() == 0)) {
            int5 = (int5 - 2);
        };
        if ((varbitplayer_60441 == 1)) {
            int5 = (int5 - 6);
        };
    };
    var int7 = (int5 / int6);
    if ((MODULO(int5, int6) > 0)) {
        int7 = (int7 + 1);
    };
    var int8 = (((int7 * 32) + ((int7 - 1) * 4)) + 16);
    var int9 = (((int6 * 32) + ((int6 - 1) * 4)) + 16);
    var int10 = 0;
    var int11 = -8;
    var int12 = 2;
    var int13 = 93782017;
    if ((int3 == 1)) {
        int13 = 37224448;
    };
    if ((IF_GETWIDTH(int13) < IF_GETHEIGHT(int13))) {
        int10 = 3;
    };
    if ((varbitplayer_22875 == 1)) {
        if ((int10 == 0)) {
            int8 = ((int7 * 32) + 8);
            int9 = ((32 * int6) + 8);
        } else {
            int8 = ((int7 * 32) + 8);
            int9 = ((32 * int6) + 8);
        };
        int11 = -11;
        int12 = 2;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int10 == 0)) {
            int10 = script8788(int9, int8, int0, int1, int10, int11, int12);
        } else {
            int10 = script8788(int8, int9, int0, int1, int10, int12, int11);
        };
    } else {
        return;
    };
    IF_OPENSUBCLIENT(96797460, 1432);
    script8421(93847553, 93847555, 93847554, -1, "", 21259, -1, 0, -1, 38884);
    if ((IF_FIND(93847556) == 1)) {
        cc_setparam(3642, int4);
        cc_setparam(3643, int10);
    };
    script8153(int4, int10);
    varbitclient_50046 = int10;
    return;
}