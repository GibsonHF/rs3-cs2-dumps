//
function script11348(): void {
    var int0 = comp(1503, 13);
    var int1 = IF_GETPARENTLAYER(int0);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    var int2 = IF_GETWIDTH(int1);
    var int3 = IF_GETHEIGHT(int1);
    var int4 = 40;
    var int5 = 10;
    var int6 = 0;
    var int7 = comp(1503, 50);
    var int8 = IF_GETWIDTH(int7);
    var int9 = IF_GETHEIGHT(int7);
    var int10 = true;
    var int11 = comp(1503, 8);
    var int12 = comp(1503, 27);
    var int13 = comp(1503, 37);
    var int14 = comp(1503, 1);
    var int15 = IF_GETWIDTH(int13);
    var int16 = IF_GETHEIGHT(int13);
    var int17 = true;
    var int18 = IF_GETWIDTH(int0);
    var int19 = IF_GETHEIGHT(int0);
    var int20 = INV_GETOBJ(94 as inv, 3);
    var int21 = 2;
    var int22 = varclient_5833;
    if (((((int20 != -1 as obj) && (int22 != 1)) && (varbitplayer_27169 == 0)) && ((item_getparam(int20, 2826) == 1) || (item_getparam(int20, 2827) == 1)))) {
        int21 = 1;
    };
    var int23 = ((int4 + (int16 * 2)) + int19);
    var int24 = ((int4 + (int16 * int21)) + int19);
    if ((int22 == 1)) {
        IF_SETHIDE(false, comp(1503, 27));
        IF_SETHIDE(true, comp(1503, 8));
        if (((int24 <= int3) && ((int15 * 2) <= int2))) {
            IF_SETHIDE(false, comp(1503, 0));
            IF_SETHIDE(true, comp(1503, 4));
        } else {
            IF_SETHIDE(true, comp(1503, 0));
            IF_SETHIDE(false, comp(1503, 4));
            int16 = IF_GETHEIGHT(int14);
            int15 = IF_GETWIDTH(int14);
            int4 = 36;
            int24 = ((int4 + (int16 * int21)) + int19);
        };
    } else {
        IF_SETHIDE(true, comp(1503, 27));
    };
    if ((int23 <= int3)) {
        int24 = int23;
        int21 = 2;
    };
    if (((int24 <= int3) && ((int15 * 2) <= int2))) {
        int17 = false;
        int6 = MIN(MIN(((int3 - int24) / 3), (int2 - (int15 * 2))), int5);
        int24 = ((int24 + int9) + (int5 * 4));
        if (((int24 <= int3) && (int8 <= int2))) {
            int10 = false;
            int6 = 10;
        };
    };
    int4 = (int4 + int6);
    if (((int17 == false) || (int22 == 1))) {
        IF_SETPOSITION(0, int4, 1, 0, int11);
        IF_SETSIZE(((int15 * 2) + int6), ((int16 * int21) + int6), 0, 0, int11);
        IF_SETPOSITION(0, int4, 1, 0, int12);
        IF_SETSIZE(((int15 * 2) + int6), ((int16 * 2) + int6), 0, 0, int12);
        int4 = ((int4 + IF_GETHEIGHT(int11)) + int6);
        IF_SETSIZE(IF_GETWIDTH(int11), int19, 0, 0, int0);
    } else {
        IF_SETSIZE(MIN(int2, int8), int19, 0, 0, int0);
    };
    if ((int10 == false)) {
        IF_SETPOSITION(0, int4, 1, 0, int7);
        int4 = ((int4 + int9) + int6);
    };
    IF_SETPOSITION(0, int4, 1, 0, int0);
    IF_SETHIDE(int10, int7);
    if ((int22 == 1)) {
        IF_SETHIDE(true, int11);
    } else {
        IF_SETHIDE(int17, int11);
    };
    script11347(comp(1503, 18), comp(1503, 23));
    script9872(comp(1503, 10));
    return;
}