//
function script13666(int0: component, int1: component, int2: unknown_int, int3: int): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 131;
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    dbrow_findnext();
    var int8 = stack();
    stack(int8);
    stack(90272);
    stack(0);
    dbrow_getfield();
    var int9 = stack();
    var int10 = -1;
    var int11 = 0;
    var int12 = IF_GETX(int2);
    var int13 = IF_GETWIDTH(int2);
    var int14 = -1;
    stack(int8);
    stack(90384);
    stack(0);
    dbrow_getfield();
    var int15 = stack();
    var int16 = 0;
    if (((int9 == 2) && (varbitplayer_48814 > 0))) {
        int16 = SCALE(varbitplayer_48814, int15, 100);
    } else {
        int16 = SCALE(varplayer_7270, int15, 100);
    };
    if ((MODULO(int16, 100) > 0)) {
        int16 = (int16 + 100);
    };
    int16 = (int16 / 100);
    int16 = (int16 * dbrow_getfield(int8, 90464, 0));
    if ((IF_FIND(int0) == 1)) {
        int7 = script12422(int7, 1000, cc_getparam(5942));
        int6 = cc_getparam(6408);
        int5 = cc_getparam(6409);
        int4 = script12377((int6 + script12377((int5 - int6), (0 - int7), int7)), 0, 65536);
        cc_setparam(6408, int4);
        CC_SETPOSITION(SCALE(int4, 65536, IF_GETWIDTH(int1)), 0, 0, 1);
        int14 = CC_GETX();
        if (((int3 != -1) && (DB_GETFIELDCOUNT(int8, 90416) > int3))) {
            [int10, int11] = dbrow_getfield(int8, 90416, int3);
            if ((int3 == 0)) {
                if ((varbitplayer_37616 >= (varplayer_7270 * int11))) {
                    if ((int14 <= (int12 + int13))) {
                        CC_SETCOLOUR(65280);
                    } else {
                        CC_SETCOLOUR(16711680);
                    };
                } else if ((int14 >= (int12 + int13))) {
                    CC_SETCOLOUR(16711680);
                } else {
                    CC_SETCOLOUR(65280);
                };
            } else if ((int3 == 1)) {
                if ((varbitplayer_37617 >= (varplayer_7270 * int11))) {
                    if ((int14 <= (int12 + int13))) {
                        CC_SETCOLOUR(65280);
                    } else {
                        CC_SETCOLOUR(16711680);
                    };
                } else if ((int14 >= (int12 + int13))) {
                    CC_SETCOLOUR(16711680);
                } else {
                    CC_SETCOLOUR(65280);
                };
            };
        } else if ((int3 == -1)) {
            int11 = dbrow_getfield(int8, 90464, 0);
            if ((varbitplayer_37590 >= int16)) {
                if ((int14 <= (int12 + int13))) {
                    CC_SETCOLOUR(65280);
                } else {
                    CC_SETCOLOUR(16711680);
                };
            } else if ((int14 >= (int12 + int13))) {
                CC_SETCOLOUR(16711680);
            } else {
                CC_SETCOLOUR(65280);
            };
        };
    };
    return;
}