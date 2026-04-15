//
function script14223(int0: unknown_int, int1: unknown_int, int2: int, int3: int): void {
    script14225();
    var int4 = 0;
    var int5 = 0;
    var int6 = enum_getvalue(0, 73, 14118 as cs2enum, varplayer_7989);
    if ((varclient_6403 == 4)) {
        int6 = 40069 as struct;
    };
    var int7 = 0;
    var string0 = "";
    var int8 = 0;
    var string1 = "0";
    var int9 = 0;
    stack(IF_SETONSTORETRANSMIT(int2));
    [int7, string0] = stack();
    [int4, int5] = script14226(int2, int6, int7, string0);
    var int10 = (int4 + 31);
    var int11 = (int5 + (2 * 31));
    var int3 = MAX(0, (int3 - IF_GETSCROLLY(comp(1322, 10))));
    if (((int3 + int5) > IF_GETHEIGHT(comp(1322, 5)))) {
        int3 = (IF_GETHEIGHT(comp(1322, 5)) - int5);
    };
    var int12 = (int3 - 31);
    if ((int3 < int12)) {
        int11 = (int11 - (int12 - int3));
        int12 = 0;
    };
    IF_SETHIDE(false, comp(1322, 3));
    IF_SETSIZE(int10, int11, 0, 0, comp(1322, 3));
    IF_SETSIZE(int4, int5, 0, 0, comp(1322, 12));
    IF_SETPOSITION(IF_GETWIDTH(comp(1322, 11)), int3, 0, 0, comp(1322, 12));
    IF_SETPOSITION((IF_GETWIDTH(comp(1322, 11)) + IF_GETX(comp(1322, 5))), (int12 + IF_GETY(comp(1322, 5))), 0, 0, comp(1322, 3));
    script13636(int4, int5, int5, int6, comp(1322, 17), comp(1322, 13), string0);
    var int13 = 0;
    while ((int13 < int7)) {
        [int8, string1, int9] = NOTIFICATIONS_SENDGROUPEDLOCAL(int2, int13);
        script13637(string1, 1, int2, int13, int13, int4, int6, comp(1322, 17));
        int13 = (int13 + 1);
    };
    return;
}