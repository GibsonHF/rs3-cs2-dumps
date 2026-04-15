//
function script1387(): void {
    var int0 = comp(936, 2);
    var int1 = comp(936, 7);
    var int2 = comp(936, 3);
    var int3 = comp(936, 4);
    var int4 = comp(936, 5);
    var int5 = comp(936, 6);
    IF_SETSIZE(0, 0, 1, 1, int0);
    var int6 = ENUM_GETOUTPUTCOUNT(7674 as cs2enum);
    var int7 = IF_GETWIDTH(int0);
    var int8 = IF_GETHEIGHT(int0);
    var int9 = 60;
    var int10 = (27 + 4);
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    [int14, int13, int11, int12, int15] = script1899(int7, int8, int9, int10, 16, int6);
    var int16 = (int10 * int14);
    if ((int15 == 1)) {
        IF_SETSIZE(16, 0, 1, 1, int0);
    } else {
        CC_DELETEALL(int1);
    };
    define_array(int13);
    var int17 = 0;
    while ((int17 < int13)) {
        pop_array(int17, script8108(int11, int12, int17));
        int17 = (int17 + 1);
    };
    int17 = 0;
    var int18 = 0;
    if ((int15 == 1)) {
        IF_SETSCROLLSIZE(0, int16, int0);
        script31(int1, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
    };
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    while ((int19 < int6)) {
        int20 = MODULO(int19, int13);
        int21 = (int19 / int13);
        int22 = push_array(int20);
        int23 = ((int21 * int10) + 4);
        if ((CC_FIND(int2, int19) == 1)) {
            CC_SETPOSITION(int22, int23, 0, 0);
        };
        if ((CC_FIND(int3, int19) == 1)) {
            CC_SETPOSITION(int22, int23, 0, 0);
        };
        if ((CC_FIND(int4, int19) == 1)) {
            CC_SETPOSITION((int22 + 24), (int23 + 2), 0, 0);
        };
        if ((CC_FIND(int5, int19) == 1)) {
            CC_SETPOSITION((int22 + 39), (int23 + 14), 0, 0);
        };
        int19 = (int19 + 1);
    };
    IF_SETSIZE(16384, 0, 2, 1, comp(936, 11));
    if ((int7 >= 120)) {
        IF_SETSIZE((16384 / 2), 0, 2, 1, comp(936, 11));
        IF_SETSIZE((16384 / 2), 0, 2, 1, comp(936, 12));
        IF_SETPOSITION(0, 0, 2, 0, comp(936, 12));
        IF_SETHIDE(false, comp(936, 12));
    } else {
        IF_SETHIDE(true, comp(936, 12));
    };
    return;
}