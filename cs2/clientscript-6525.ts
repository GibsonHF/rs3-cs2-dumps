//
function script6525(int0: int, int1: int, int2: int, int3: int, int4: unknown_int, int5: int, int6: graphic, int7: vorbis, int8: boolean, int9: boolean, int10: boolean, int11: boolean, string0: string): void {
    var int12 = script5843(comp(1477, 28), 1024, 780);
    IF_SETSIZE(((1024 * int12) / 100), ((576 * int12) / 100), 0, 0, comp(94, 4));
    IF_SETSIZE(((1024 * int12) / 100), ((160 * int12) / 100), 0, 0, comp(94, 5));
    IF_SETPOSITION(0, ((-38 * int12) / 100), 1, 1, comp(94, 4));
    if (((IF_FIND(comp(94, 5)) == 1) && ((cc_getparam(8059) != IF_GETWIDTH(comp(94, 5))) || (cc_getparam(8060) != IF_GETHEIGHT(comp(94, 5)))))) {
        script15883();
    };
    if ((int0 == 0)) {
        var int1 = 0;
        var int2 = 0;
        CLIENTOPTION_SET(24, 0);
        var int5 = DB_GETFIELDCOUNT(varplayer_8531, 163888);
    };
    if ((int2 == 0)) {
        stack(dbrow_getfield(varplayer_8531, 163888, int1));
        var [int6, string0, int7, int3, int8, int9, int10, int11] = stack();
    };
    if ((int2 < int3)) {
        if ((int2 == 0)) {
            script6526(int6, string0, int7, int8, int10);
        } else if ((int2 < 60)) {
            if ((int8 == true)) {
                IF_SETTRANS(MAX(0, (IF_GETTRANS(comp(94, 4)) - 5)), comp(94, 4));
            };
            if ((int10 == true)) {
                IF_SETTRANS(MAX(0, (IF_GETTRANS(comp(94, 5)) - 5)), comp(94, 5));
            };
        } else if ((int2 >= (int3 - 60))) {
            if ((int9 == true)) {
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(94, 4)) + 5)), comp(94, 4));
            };
            if ((int11 == true)) {
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(94, 5)) + 5)), comp(94, 5));
            };
        };
        int2 = (int2 + 1);
    } else {
        int1 = (int1 + 1);
        int2 = 0;
    };
    if (((int1 < int5) && (varplayer_8531 != -1 as dbrow))) {
        IF_SETONTIMER(callback(script6525, (int0 + 1), int1, int2, int3, int4, int5, int6, string0, int7, int8, int9, int10, int11), 6160387);
    };
    return;
}