//
function script13664(): void {
    if ((varbitplayer_37614 == 0)) {
        return;
    };
    stack(90112);
    stack(varbitplayer_37614);
    DB_FIND(0);
    var int0 = dbrow_findnext();
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = dbrow_getfield(int0, 90288, 0);
    var int5 = DB_GETFIELDCOUNT(int0, 90416);
    var int6 = dbrow_getfield(int0, 90272, 0);
    var int7 = IF_GETWIDTH(comp(1902, 10));
    var int8 = IF_GETWIDTH(comp(1902, 11));
    var int9 = dbrow_getfield(int0, 90384, 0);
    var int10 = 0;
    if ((int6 == 2)) {
        if ((varbitplayer_48814 > 0)) {
            int10 = (varbitplayer_48814 / int9);
            if ((MODULO(varbitplayer_48814, int9) > 0)) {
                int10 = (int10 + 1);
            };
        } else {
            int10 = (varplayer_7270 / int9);
            if ((MODULO(varplayer_7270, int9) > 0)) {
                int10 = (int10 + 1);
            };
        };
    } else {
        int10 = (varplayer_7270 / int9);
        if ((MODULO(varplayer_7270, int9) > 0)) {
            int10 = (int10 + 1);
        };
    };
    if ((int5 > 0)) {
        [int1, int2] = dbrow_getfield(int0, 90416, 0);
        int3 = ((IF_GETX(comp(1902, 10)) + SCALE(int7, (int2 * int4), (varplayer_7270 * int2))) - (IF_GETWIDTH(comp(1902, 16)) / 2));
        if ((IF_FIND(comp(1902, 16)) == 1)) {
            cc_setparam(6408, script12422(CC_GETX(), int7, 65536));
            cc_setparam(6409, script12422(int3, int7, 65536));
        };
    };
    if ((int5 > 1)) {
        [int1, int2] = dbrow_getfield(int0, 90416, 1);
        int3 = ((IF_GETX(comp(1902, 11)) + SCALE(int8, (int2 * int4), (varplayer_7270 * int2))) - (IF_GETWIDTH(comp(1902, 18)) / 2));
        if ((IF_FIND(comp(1902, 18)) == 1)) {
            cc_setparam(6408, script12422(CC_GETX(), int8, 65536));
            cc_setparam(6409, script12422(int3, int8, 65536));
        };
    };
    int2 = dbrow_getfield(int0, 90464, 0);
    var int11 = 0;
    var int12 = (int10 * int2);
    switch (varbitplayer_37593) {
        case 1: {
            int11 = 175000;
            break;
        }
        case 2: {
            int11 = 350000;
            break;
        }
        case 3: {
            int11 = 500000;
            break;
        }
    };
    int3 = ((IF_GETX(comp(1902, 12)) + SCALE(int12, int11, int8)) - (IF_GETWIDTH(comp(1902, 13)) / 2));
    if ((IF_FIND(comp(1902, 13)) == 1)) {
        cc_setparam(6408, script12422(CC_GETX(), int8, 65536));
        cc_setparam(6409, script12422(int3, int8, 65536));
    };
    return;
}