//
function script16462(int0: component, int1: int, int2: int, int3: int, int4: unknown_int, string0: string): int {
    var int5 = 0;
    var int6 = 10;
    define_array(int6);
    define_array[65536](int6);
    var int7 = 0;
    while (((int5 < int6) && (int7 == 0))) {
        if ((int5 == 0)) {
            pop_array(int5, 0);
        } else {
            pop_array(int5, (push_array[1]((int5 - 1)) + 4));
        };
        pop_array[1](int5, STRING_INDEXOF_STRING(string0, "<br>", push_array(int5)));
        if ((push_array[1](int5) == -1)) {
            int7 = 1;
            pop_array[1](int5, STRING_LENGTH(string0));
        } else {
            int5 = (int5 + 1);
        };
    };
    int6 = int5;
    int5 = 0;
    var int8 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 3, int8++);
    CC_SETPOSITION(0, int2, 0, 0);
    CC_SETFILL(1);
    CC_SETCOLOUR(script10495(9));
    var int9 = (int8 - 1);
    var int10 = 26 as fontmetrics;
    var int11 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int10 = 28 as fontmetrics;
        int11 = 28 as fontmetrics;
    };
    var int2 = ((int2 + CC_GETHEIGHT()) + 8);
    CC_CREATE(int0, 4, int8++);
    CC_SETPOSITION(4, int2, 0, 0);
    CC_SETTEXT("Requirements:");
    CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int3 - (2 * 4)), int10, 0), 1, 0);
    CC_SETTEXTFONT(int10);
    if ((int4 == 0)) {
        CC_SETCOLOUR(script10495(6));
    } else {
        CC_SETCOLOUR(script10495(3));
    };
    CC_SETTEXTALIGN(0, 1, 0);
    int2 = ((int2 + CC_GETHEIGHT()) + 8);
    var int12 = 16;
    var int13 = 16;
    var int14 = (((4 + int12) + 4) + int1);
    var int15 = 0;
    while (((int5 < int6) && (int5 < 4))) {
        CC_CREATE(int0, 5, int8++);
        CC_SETPOSITION(4, int2, 0, 0);
        CC_SETSIZE(int12, int13, 0, 0);
        if (((int5 == 3) && (int6 > 4))) {
            CC_SETGRAPHIC(18944 as graphic);
        } else {
            CC_SETGRAPHIC(21342 as graphic);
        };
        CC_CREATE(int0, 4, int8++);
        CC_SETPOSITION(int14, int2, 0, 0);
        CC_SETTEXT(SUBSTRING(string0, push_array(int5), push_array[1](int5)));
        int15 = script7593(CC_GETTEXT(), ((int3 - int14) - 4), int11, 0);
        if ((int15 < int13)) {
            int15 = int13;
            CC_SETTEXTALIGN(0, 1, 0);
        } else {
            CC_SETTEXTALIGN(0, 0, 0);
        };
        CC_SETSIZE((int14 + 4), int15, 1, 0);
        CC_SETTEXTFONT(int11);
        if ((int4 == 0)) {
            CC_SETCOLOUR(script10495(6));
        } else {
            CC_SETCOLOUR(16777215);
        };
        int2 = ((int2 + CC_GETHEIGHT()) + 2);
        int5 = (int5 + 1);
    };
    int2 = (int2 + 8);
    CC_FIND(int0, int9);
    CC_SETSIZE(0, ((int2 - 2) - CC_GETY()), 1, 0);
    return int2;
}