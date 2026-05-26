//
function script12945(int0: number): void {
    var int1 = enum_getvalue(0, 74, 706 as cs2enum, int0);
    var int2 = 0;
    var int3 = 0;
    var int4 = 5;
    var int5 = 0;
    var int6 = 0;
    var string0 = "";
    CC_DELETEALL(118620187);
    CC_DELETEALL(118620186);
    IF_SETSIZE(22, 8, 1, 1, 118620187);
    if ((int1 != -1 as dbrow)) {
        int3 = DB_GETFIELDCOUNT(int1, 53328);
        int2 = 0;
        while ((int2 < int3)) {
            stack(dbrow_getfield(int1, 53328, int2));
            [int6, string0] = stack();
            if ((int6 == 1)) {
                [int5, int4] = script176(118620187, IF_GETNEXTSUBID(118620187), 5, int4, IF_GETWIDTH(118620187), 21341, 16, 16, string0, 29166);
            } else {
                [int5, int4] = script12086(118620187, IF_GETNEXTSUBID(118620187), 5, int4, IF_GETWIDTH(118620187), string0, 29166);
            };
            int2 = (int2 + 1);
        };
    };
    if ((int4 <= IF_GETHEIGHT(118620187))) {
        IF_SETSIZE(8, 8, 1, 1, 118620187);
    } else {
        IF_SETSCROLLSIZE(IF_GETWIDTH(118620187), int4, 118620187);
        script7791(118620186, 118620187);
    };
    IF_SETHIDE(1, comp(1810, 20));
    IF_SETHIDE(1, comp(1810, 32));
    IF_SETHIDE(1, comp(1810, 40));
    IF_SETHIDE(1, comp(1810, 48));
    IF_SETHIDE(1, comp(1810, 56));
    IF_SETHIDE(1, comp(1810, 64));
    IF_SETHIDE(1, comp(1810, 72));
    IF_SETHIDE(1, comp(1810, 80));
    IF_SETHIDE(1, comp(1810, 88));
    IF_SETHIDE(0, struct_getparam(enum_getvalue(0, 73, 11920 as cs2enum, int0), 4040));
    return;
}