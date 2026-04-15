//
function script13396(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: struct): void {
    var int7 = (int2 + (2 * 31));
    var int8 = (int3 + (2 * 31));
    var int9 = (int0 - 31);
    var int10 = (int1 - 31);
    if ((int0 < int9)) {
        int7 = (int7 - (int9 - int0));
        int9 = 0;
    };
    if ((int1 < int10)) {
        int8 = (int8 - (int10 - int1));
        int10 = 0;
    };
    IF_SETHIDE(false, comp(1322, 4));
    IF_SETPOSITION(int9, int10, 0, 0, comp(1322, 4));
    IF_SETSIZE(int7, int8, 0, 0, comp(1322, 4));
    IF_SETSIZE(int2, int3, 0, 0, comp(1322, 11));
    script13636(int2, int3, int4, int6, comp(1322, 10), comp(1322, 9), enum_getvalue(0, 36, 14117 as cs2enum, MAP_LANG()));
    var int11 = 0;
    var string0 = "0";
    var int12 = 0;
    var int13 = 0;
    var string1 = "0";
    var int14 = 0;
    while ((int11 < int5)) {
        stack(IF_SETONSTORETRANSMIT(int11));
        [int12, string0] = stack();
        if ((int12 > 1)) {
            script13637(`${string0}<col=FFFFFF> <gt>`, 0, -1, int11, int11, int2, int6, comp(1322, 10));
        } else {
            [int13, string1, int14] = NOTIFICATIONS_SENDGROUPEDLOCAL(int11, 0);
            script13637(string1, 1, int11, 0, int11, int2, int6, comp(1322, 10));
            CC_SETONMOUSEOVER(callback(script14224));
        };
        int11 = (int11 + 1);
    };
    return;
}