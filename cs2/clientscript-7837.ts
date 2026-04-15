//
function script7837(int0: component): void {
    var int1 = IF_GETWIDTH(int0);
    var int2 = IF_GETHEIGHT(int0);
    var string0 = IF_GETTEXT(int0);
    var int3 = MIN(70, (1 + MIN(SCALE(int1, 366, 14), SCALE(int2, 86, 14))));
    var int4 = enum_getvalue(0, 25, 16356 as cs2enum, int3);
    var int5 = PARAWIDTH(string0, int1, int4);
    var int6 = PARAHEIGHT(string0, int1, int4);
    var int7 = (int6 * int3);
    var int8 = varplayer_8180;
    if ((int8 <= 0)) {
        int8 = 4;
    };
    while ((int3 >= 11)) {
        if ((((int6 > int8) || (int7 > int2)) || (int5 > int1))) {
            int4 = enum_getvalue(0, 25, 16356 as cs2enum, int3);
            int5 = PARAWIDTH(string0, int1, int4);
            int6 = PARAHEIGHT(string0, int1, int4);
            int7 = (int6 * int3);
            int3 = (int3 - 1);
        };
    };
    IF_SETTEXTFONT(int4, int0);
    IF_SETTEXTALIGN(1, 1, 0, int0);
    return;
}