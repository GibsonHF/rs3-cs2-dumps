//
function script12121(): void {
    CC_DELETEALL(111935519);
    CC_DELETEALL(111935521);
    CC_DELETEALL(111935557);
    var int0 = 0;
    var int1 = 0;
    var int2 = -1 as dbrow;
    var int3 = ENUM_GETOUTPUTCOUNT(10743);
    define_array(int3);
    define_array[65536](int3);
    var int4 = 0;
    while ((int4 < int3)) {
        int2 = enum_getvalue(0, 74, 10743 as cs2enum, int4);
        pop_array(int4, int4);
        pop_array[1](int4, dbrow_getfield(int2, 20624, 0));
        CC_CREATE(111935521, 3, int4);
        CC_SETHIDE(1);
        int4 = (int4 + 1);
    };
    ARRAY_SORT(int3, 1, 0);
    int4 = 0;
    while ((int4 < ENUM_GETOUTPUTCOUNT(10743))) {
        int2 = enum_getvalue(0, 74, 10743 as cs2enum, push_array(int4));
        if (((script12058(int2) == 0) && (script14702(int2) == 1))) {
            int0 = script12122(111935519, int0, 111935521, push_array(int4), 5, (5 + (int1 * 40)), int2);
            int1 = (int1 + 1);
        };
        int4 = (int4 + 1);
    };
    if ((int1 == 0)) {
        CC_CREATE(111935519, 4, int0);
        CC_SETTEXT("No inventions");
        CC_SETTEXTFONT(57);
        CC_SETTEXTALIGN(0, 1, 16);
        script10674(CC_GETLAYER(), CC_GETID(), 0);
        CC_SETSIZE(20, 20, 1, 0);
        CC_SETPOSITION(5, 10, 0, 0);
        int0 = (int0 + 1);
        CC_CREATE(111935519, 4, int0);
        CC_SETTEXT("You can't think of anything new to invent at the moment.");
        CC_SETTEXTFONT(26);
        CC_SETTEXTALIGN(0, 0, 12);
        script10674(CC_GETLAYER(), CC_GETID(), 3);
        CC_SETSIZE(20, 60, 1, 0);
        CC_SETPOSITION(5, 40, 0, 0);
        int0 = (int0 + 1);
    };
    var int5 = ((int1 * 40) + 120);
    if ((int5 <= IF_GETHEIGHT(111935550))) {
        IF_SETHIDE(1, 111935489);
        IF_SETSCROLLPOS(0, 0, 111935490);
        IF_SETPOSITION(5, 1, 0, 0, 111935490);
    } else {
        IF_SETHIDE(0, 111935489);
        IF_SETSCROLLPOS(0, MAX(0, IF_GETSCROLLY(111935490)), 111935490);
        IF_SETSCROLLSIZE(0, int5, 111935490);
        script7791(111935489, 111935490);
        IF_SETPOSITION(0, 1, 0, 0, 111935490);
    };
    if ((IF_FIND(111935520) == 1)) {
        cc_setparam(5530, -1);
        cc_setparam(5531, 0);
        cc_setparam(5532, 0);
    };
    return;
}