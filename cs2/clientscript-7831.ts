//
function script7831(): void {
    var int0 = comp(709, 9);
    var int1 = comp(709, 10);
    var int2 = IF_GETFONTMETRICS(int0);
    var int3 = enum_getvalue(25, 0, 8549 as cs2enum, int2);
    var int4 = script7593(IF_GETTEXT(int0), IF_GETWIDTH(int0), int2, int3);
    if ((int4 > IF_GETHEIGHT(int0))) {
        IF_SETSIZE(8, int4, 1, 0, int0);
        IF_SETMAXLINES(2, int0);
        IF_SETTEXTALIGN(1, 1, int3, int0);
    } else if ((int4 < IF_GETHEIGHT(int0))) {
        IF_SETSIZE(8, int4, 1, 0, int0);
        IF_SETMAXLINES(1, int0);
        IF_SETTEXTALIGN(1, 1, 0, int0);
    };
    IF_SETPOSITION(IF_GETX(int1), ((IF_GETY(int0) + IF_GETHEIGHT(int0)) + 4), 0, 0, int1);
    IF_SETSIZE(IF_GETWIDTH(comp(709, 10)), ((IF_GETY(comp(709, 14)) - (3 * 4)) - IF_GETHEIGHT(int0)), 0, 0, int1);
    return;
}