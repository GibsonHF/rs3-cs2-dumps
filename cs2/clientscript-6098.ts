//
function script6098(): void {
    var int0 = comp(78, 3);  // group_inspect_stats:list
    var int1 = comp(78, 8);  // group_inspect_stats:scrollbar
    var int2 = comp(78, 4);  // group_inspect_stats:background
    var int3 = comp(78, 5);  // group_inspect_stats:icon
    var int4 = comp(78, 6);  // group_inspect_stats:stat
    var int5 = comp(78, 7);  // group_inspect_stats:stat_base
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
        script31(int1, int0, 792, 789, 790, 791, 773, 788);
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
    IF_SETSIZE(16384, 0, 2, 1, comp(78, 12));  // group_inspect_stats:skilltotal
    if ((int7 >= 120)) {
        IF_SETSIZE((16384 / 2), 0, 2, 1, comp(78, 12));  // group_inspect_stats:skilltotal
        IF_SETSIZE((16384 / 2), 0, 2, 1, comp(78, 13));  // group_inspect_stats:combat_level
        IF_SETPOSITION(0, 0, 2, 0, comp(78, 13));  // group_inspect_stats:combat_level
        IF_SETHIDE(false, comp(78, 13));  // group_inspect_stats:combat_level
    } else {
        IF_SETHIDE(true, comp(78, 13));  // group_inspect_stats:combat_level
    };
    return;
}