//
function script16889(int0: component, int1: component, int2: component, int3: component, int4: component): void {
    var int5 = ENUM_GETOUTPUTCOUNT(14157 as cs2enum);
    define_array[33](int5);
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as obj;
    while ((int6 < int5)) {
        int8 = enum_getvalue(0, 33, 14157 as cs2enum, int6);
        if (((int8 != -1 as obj) && (script14434(int8) == 1))) {
            pop_array(int7, int8);
            int7 = (int7 + 1);
        };
        int6 = (int6 + 1);
    };
    if ((int7 <= 0)) {
        IF_SETSIZE(IF_GETWIDTH(int4), 300, 0, 0, int4);
        IF_SETHIDE(true, int0);
        IF_SETTEXT("", int3);
        return;
    };
    IF_SETHIDE(false, int0);
    IF_SETTEXT("Unfortunately, you will lose these items when you leave this mode:", int3);
    int6 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 55;
    var int12 = 12;
    var int13 = IF_GETWIDTH(int1);
    while ((int6 < int7)) {
        int8 = push_array(int6);
        if (((int9 + int11) > int13)) {
            int9 = 0;
            int10 = (int10 + (int11 + int12));
        };
        script15938(int1, int6, 0, int9, int10, 0, 0, int11, int11, 0, 0);
        script7918(int6, 1, 0, 0, 1, 1, 0, 0, 1, 1, 10804 as graphic);
        script9861(int6, 2, 3, 0, 1, 1, 8, 32, 1, 4, int8, 1, 3, 1);
        CC_SETASPECT(36, 32);
        script14738(int8);
        int6 = (int6 + 1);
        int9 = (int9 + (int11 + int12));
    };
    if ((int9 != 0)) {
        int10 = (int10 + int11);
    };
    var int14 = MIN(MAX(((266 + int10) + 8), 300), 400);
    IF_SETSIZE(IF_GETWIDTH(int4), int14, 0, 0, int4);
    if ((int10 > IF_GETHEIGHT(int1))) {
        IF_SETHIDE(false, int2);
        IF_SETPOSITION(4, 0, 0, 1, int1);
        IF_SETSCROLLSIZE(0, int10, int1);
        script7791(int2, int1);
    } else {
        IF_SETHIDE(true, int2);
        if ((int10 == int11)) {
            IF_SETSIZE((int9 - int12), 8, 0, 1, int1);
        } else {
            IF_SETSIZE(24, 8, 1, 1, int1);
        };
        IF_SETPOSITION(0, 0, 1, 1, int1);
        IF_SETSCROLLSIZE(0, 0, int1);
        CC_DELETEALL(int2);
    };
    return;
}