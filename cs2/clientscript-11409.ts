//
function script11409(int0: component): void {
    var int1 = INV_SIZE(773 as inv);
    var int2 = (IF_GETHEIGHT(int0) - 52);
    var int3 = 0;
    var int4 = 0;
    IF_SETHIDE(false, comp(1622, 2));
    IF_SETSIZE(0, 52, 1, 1, comp(1622, 1));
    IF_SETSIZE(16, 52, 0, 1, comp(1622, 0));
    if ((varbitplayer_22875 != 1)) {
        IF_SETHIDE(false, comp(1622, 10));
    } else {
        IF_SETHIDE(true, comp(1622, 10));
    };
    var int5 = -1;
    var int6 = -1;
    int5 = IF_GETWIDTH(comp(1622, 1));
    int6 = IF_GETHEIGHT(comp(1622, 1));
    var int7 = 40;
    var int8 = 36;
    var int9 = 2;
    if ((script6431() == true)) {
        int7 = 54;
        int8 = 48;
        int9 = 2;
    };
    int7 = (int7 - 4);
    int8 = (int8 - 4);
    var int10 = (int7 + 2);
    var int11 = ((int8 + 2) + int9);
    var int12 = (int6 - (2 + 2));
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    [int15, int13, int14] = script9856((int5 - 2), int10, (2 + 2), 2);
    int15 = MIN(int15, int1);
    var int16 = (int1 / int15);
    int16 = MAX(int16, 1);
    if ((MODULO(int1, int15) > 0)) {
        int16 = (int16 + 1);
    };
    int16 = MAX(1, int16);
    if (((int16 * int11) > int12)) {
        int3 = 1;
        IF_SETSIZE(16, 52, 1, 1, comp(1622, 1));
        IF_SETPOSITION(0, 0, 2, 0, comp(1622, 0));
        IF_SETSIZE(16, 52, 0, 1, comp(1622, 0));
        int5 = IF_GETWIDTH(comp(1622, 1));
        int6 = IF_GETHEIGHT(comp(1622, 1));
        [int15, int13, int14] = script9856((int5 - 2), int10, (2 + 2), 2);
    };
    int15 = MIN(int15, int1);
    int16 = (int1 / int15);
    int16 = MAX(int16, 1);
    if ((MODULO(int1, int15) > 0)) {
        int16 = (int16 + 1);
    };
    int16 = MAX(1, int16);
    var int17 = (((int15 * int10) + 2) + 2);
    var int18 = ((int16 * int11) + (2 + 2));
    int4 = MAX(IF_GETHEIGHT(comp(1622, 1)), (int18 - int6));
    IF_SETSCROLLSIZE(0, int4, comp(1622, 1));
    var int19 = 0;
    var int20 = 0;
    var int21 = -1 as obj;
    var int22 = 0;
    var int23 = (varclient_1031 - 1);
    define_array(int15);
    var int24 = 0;
    while ((int24 < int15)) {
        pop_array(int24, script9857(int13, 2, int14, int24));
        int24 = (int24 + 1);
    };
    while ((int19 < int1)) {
        if (((CC_FIND[1](comp(1622, 10), int19) == 1) && (CC_FIND(comp(1622, 11), int19) == 1))) {
            int21 = INV_GETOBJ(773 as inv, int19);
            int22 = INV_GETNUM(773 as inv, int19);
            CC_SETPOSITION[1]((push_array(MODULO(int19, int15)) - 1), ((((int19 / int15) * int11) + 2) - 1), 0, 0);
            if ((CC_FIND[1](comp(1622, 12), int19) == 1)) {
                CC_SETPOSITION[1]((push_array(MODULO(int19, int15)) - 1), ((((int19 / int15) * int11) + 2) - 1), 0, 0);
            };
            CC_SETPOSITION((push_array(MODULO(int19, int15)) + 3), ((((int19 / int15) * int11) + 1) + 2), 0, 0);
            if ((int21 != -1 as obj)) {
                script11410(int21, int22);
            } else {
                script9230(-1 as obj, 0);
            };
        };
        int19 = (int19 + 1);
    };
    var int25 = (((int16 * int11) + 2) + 2);
    int25 = MAX(IF_GETHEIGHT(comp(1622, 1)), int25);
    CC_DELETEALL(comp(1622, 0));
    IF_SETSCROLLSIZE(0, int25, comp(1622, 1));
    if ((int25 > IF_GETHEIGHT(comp(1622, 1)))) {
        script7791(comp(1622, 0), comp(1622, 1));
    };
    return;
}