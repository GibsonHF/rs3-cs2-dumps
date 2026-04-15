//
function script15867(int0: int): void {
    var int1 = comp(858, 14);
    var int2 = comp(858, 15);
    var int3 = comp(858, 16);
    var int4 = comp(858, 17);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    IF_SETSCROLLPOS(0, 0, int1);
    IF_SETSCROLLSIZE(0, 0, int1);
    var int5 = ENUM_GETOUTPUTCOUNT(10680 as cs2enum);
    define_array(int5);
    var int6 = script753(0, int5, int0);
    if ((IF_GETHEIGHT(int1) > (int6 * (40 + 6)))) {
        IF_SETSIZE(0, 0, 1, 1, int1);
    } else {
        IF_SETSIZE(16, 0, 1, 1, int1);
        IF_SETSCROLLSIZE(0, (int6 * (40 + 6)), int1);
        script7791(int4, int1);
    };
    var int7 = IF_GETWIDTH(int2);
    var int8 = ((int7 - 128) + 9);
    var int9 = 0;
    var int10 = 0;
    var int11 = -1 as struct;
    var int12 = -1;
    var int13 = -1;
    var int14 = -1;
    var int15 = -1 as cs2enum;
    var int16 = ((40 / 2) - 11);
    while ((int9 < int6)) {
        int11 = enum_getvalue(0, 73, 10680 as cs2enum, push_array(int9));
        int15 = script755(int11);
        if ((int15 != -1 as cs2enum)) {
            CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
            CC_SETSIZE(int8, 40, 1, 0);
            CC_SETPOSITION(9, int10, 0, 0);
            CC_SETTEXTFONT(29 as fontmetrics);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETCOLOUR(script693(255, 255, 255));
            CC_SETTEXT(struct_getparam(int11, 6647));
            [int12, int13] = script11599(int0, int11);
            if (((int12 == 0) || ((int11 == 37632 as struct) && (varbitplayer_36983 == 1)))) {
                int14 = (ENUM_GETOUTPUTCOUNT(int15) - 1);
            } else if ((int11 == 37641 as struct)) {
                int14 = int12;
            } else {
                int14 = int13;
            };
            script10429(int2, int3, (int7 - 128), (int10 + int16), 128, IF_GETNEXTSUBID(int3), int15, -1, "", int14, 0);
            int10 = (int10 + (40 + 6));
        };
        int9 = (int9 + 1);
    };
    return;
}