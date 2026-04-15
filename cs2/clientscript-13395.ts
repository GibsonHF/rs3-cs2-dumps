//
function script13395(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: struct): void {
    var int7 = 0;
    var int8 = 0;
    var string0 = "0";
    var int9 = 0;
    var int10 = 0;
    IF_SETSIZE(0, 0, 1, 1, comp(1322, 11));
    var int11 = (int2 + (2 * 31));
    var int12 = (int3 + (2 * 31));
    var int13 = (int0 - 31);
    var int14 = (int1 - 31);
    if ((int0 < int13)) {
        int11 = (int11 - (int13 - int0));
        int13 = 0;
    };
    if ((int1 < int14)) {
        int12 = (int12 - (int14 - int1));
        int14 = 0;
    };
    IF_SETHIDE(false, comp(1322, 4));
    IF_SETPOSITION(int13, int14, 0, 0, comp(1322, 4));
    IF_SETSIZE(int11, int12, 0, 0, comp(1322, 4));
    script13636(int2, int3, int4, int6, comp(1322, 10), comp(1322, 9), enum_getvalue(0, 36, 14117 as cs2enum, MAP_LANG()));
    while ((int7 < int5)) {
        [int8, string0, int9] = NOTIFICATIONS_SENDGROUPEDLOCAL(-1, int7);
        if (((varbitplayer_41265 == 0) || (TESTBIT(varplayer_7991, int8) == 0))) {
            script13637(string0, 1, -1, int7, int10, int2, int6, comp(1322, 10));
            if ((CC_FIND(comp(1322, 10), int7) == 1)) {
                cc_setparam(6122, int2);
                cc_setparam(6123, int3);
                cc_setparam(6124, int0);
                cc_setparam(7539, int1);
            };
            int10 = (int10 + 1);
        };
        int7 = (int7 + 1);
    };
    script2958(-1, 0, comp(1322, 10));
    return;
}