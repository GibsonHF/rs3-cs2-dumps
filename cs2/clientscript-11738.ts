//
function script11738(): void {
    var int0 = 0;
    var int1 = -1 as struct;
    var int2 = 0;
    while ((int0 < ENUM_GETOUTPUTCOUNT(10270 as cs2enum))) {
        int2 = enum_getvalue(0, 0, 10270 as cs2enum, int0);
        int1 = enum_getvalue(0, 73, 10269 as cs2enum, int2);
        if ((int1 == -1 as struct)) {
            int1 = 32063 as struct;
        };
        script10410(comp(1659, 0), comp(-1, 65535), 28556 as struct, 0, (int0 * 60), IF_GETWIDTH(comp(1659, 0)), 60, int0, false, "");
        CC_CREATE(comp(1659, 8), 4, int0);
        CC_SETTEXT(struct_getparam(int1, 5216));
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(script10495(0));
        CC_SETPOSITION(10, ((int0 * 60) + 10), 0, 0);
        CC_SETSIZE(20, 10, 1, 0);
        CC_CREATE(comp(1659, 7), 4, int0);
        CC_SETTEXT(struct_getparam(int1, 5217));
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETCOLOUR(script10495(3));
        CC_SETPOSITION(10, ((int0 * 60) + 20), 0, 0);
        CC_SETSIZE(20, 30, 1, 0);
        CC_CREATE(comp(1659, 6), 4, int0);
        CC_SETPOSITION(10, (int0 * 60), 0, 0);
        CC_SETSIZE(0, 60, 1, 0);
        CC_SETOP(1, "Select");
        int0 = (int0 + 1);
    };
    if (((int0 * 60) > IF_GETHEIGHT(comp(1659, 5)))) {
        IF_SETSCROLLSIZE(0, (int0 * 60), comp(1659, 5));
        script7791(comp(1659, 1), comp(1659, 5));
    };
    return;
}