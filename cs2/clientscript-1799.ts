//
function script1799(int0: component, int1: component): void {
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = true;
    while ((int2 <= 4)) {
        int4 = enum_getvalue(0, 73, 1604 as cs2enum, int2);
        int5 = false;
        CC_CREATE(int0, 5, (int2 * 3));
        CC_SETPOSITION(4, int3, 0, 0);
        CC_SETSIZE(18, 18, 0, 0);
        if (((MAP_MEMBERS() == 0) && (struct_getparam(int4, 557) == true))) {
            int5 = true;
            CC_SETGRAPHIC(698 as graphic);
        };
        script10020(script9670(int2, 0), int5, 0);
        CC_CREATE(int0, 4, ((int2 * 3) + 1));
        CC_SETPOSITION(25, int3, 0, 0);
        CC_SETSIZE(25, 17, 1, 0);
        CC_SETTEXT(struct_getparam(int4, 555));
        CC_SETTEXTFONT(67 as fontmetrics);
        CC_SETTEXTALIGN(0, 0, 0);
        script2731(int0, ((int2 * 3) + 1), 3);
        CC_SETCOLOUR(13150820);
        CC_SETTEXTSHADOW(true);
        CC_SETONMOUSEREPEAT(callback(script8799, struct_getparam(int4, 556), int0, ((int2 * 3) + 1)));
        CC_SETONMOUSELEAVE(callback(script8805));
        CC_CREATE[1](int0, 3, ((int2 * 3) + 2));
        CC_SETPOSITION[1](4, int3, 0, 0);
        CC_SETSIZE[1](8, 17, 1, 0);
        CC_SETTRANS[1](255);
        CC_SETOP[1](1, struct_getparam(int4, 555));
        CC_SETONOP[1](callback(script1833, -2147483644, int2));
        int3 = (int3 + CC_GETHEIGHT[1]());
        if ((int2 < 4)) {
            int3 = (int3 + 3);
        };
        int2 = (int2 + 1);
    };
    IF_SETSCROLLSIZE(0, int3, int0);
    IF_SETSCROLLPOS(0, 0, int0);
    if ((IF_GETHEIGHT(int0) >= int3)) {
        IF_SETHIDE(true, int1);
        IF_SETSIZE(4, IF_GETHEIGHT(int0), 1, 0, int0);
    } else {
        IF_SETHIDE(false, int1);
        IF_SETSIZE(18, IF_GETHEIGHT(int0), 1, 0, int0);
        script31(int1, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    };
    return;
}