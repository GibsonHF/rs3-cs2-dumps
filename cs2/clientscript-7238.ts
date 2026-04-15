//
function script7238(int0: int, int1: struct, int2: component, int3: component, int4: int, string0: string): int {
    var int5 = struct_getparam(int1, 4205);
    var int6 = struct_getparam(int1, 4202);
    if ((script6431() == true)) {
        switch (int6) {
            case 28: {
                int6 = 30 as fontmetrics;
                break;
            }
            case 29: {
                int6 = 31 as fontmetrics;
                break;
            }
            case 26: {
                int6 = 28 as fontmetrics;
                break;
            }
        };
    };
    var int7 = 0;
    if (((int4 > 0) && (CC_FIND(int3, (int4 - 1)) == 1))) {
        int7 = (CC_GETY() + CC_GETHEIGHT());
    };
    var int8 = IF_GETWIDTH(int2);
    var int9 = 300;
    var int10 = 16;
    var int11 = STRINGWIDTH(string0, int6);
    if ((int3 == comp(1486, 14))) {
        int9 = 350;
        int11 = MIN(int11, int9);
        int10 = 0;
        if ((int8 < int11)) {
            int8 = MAX(int8, MIN(PARAWIDTH(string0, int9, int6), int9));
        };
    } else if ((int3 == comp(1322, 7))) {
        int9 = 270;
        int11 = MIN(int11, int9);
        int10 = 0;
        int8 = 270;
    } else {
        int11 = MIN(int11, int9);
        int10 = 14;
        if ((int8 < (int11 + 20))) {
            int8 = (int11 + 20);
        };
    };
    IF_SETSIZE(int8, ((int7 + int5) + int10), 0, 0, int2);
    CC_CREATE(int3, 4, int4);
    CC_SETSIZE(0, int5, 1, 0);
    CC_SETPOSITION(0, int7, 1, 0);
    CC_SETTEXTFONT(int6);
    CC_SETCOLOUR(int0);
    CC_SETTEXTALIGN(struct_getparam(int1, 4203), struct_getparam(int1, 4204), int5);
    CC_SETTEXTSHADOW(true);
    CC_SETTEXT(string0);
    var int12 = PARAHEIGHT(string0, CC_GETWIDTH(), int6);
    var int13 = 0;
    var int14 = 0;
    var int15 = (int4 + 1);
    if ((int12 > 1)) {
        CC_SETSIZE(CC_GETWIDTH(), (int12 * int5), 0, 0);
        int13 = (int12 * int5);
        int13 = ((int13 + int7) + int10);
        IF_SETSIZE(int8, int13, 0, 0, int2);
        int14 = (int12 - 1);
        while ((int14 > 0)) {
            CC_CREATE(int3, 4, int15);
            CC_SETHIDE(true);
            int15 = (int15 + 1);
            int14 = (int14 - 1);
            CC_SETPOSITION(0, (int7 + (int12 * int5)), 1, 0);
        };
    };
    return (int4 + int12);
}