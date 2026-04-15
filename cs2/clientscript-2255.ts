//
function script2255(int0: int, int1: int, int2: component, int3: int, int4: int, int5: int, int6: int, int7: unknown_int, int8: unknown_int, int9: component): int {
    if ((int2 == comp(-1, 65535))) {
        return -1;
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    if ((int3 == -1)) {
        int10 = script8407(int2);
        int11 = script8408(int2);
        int12 = IF_GETWIDTH(int2);
        int13 = IF_GETHEIGHT(int2);
    } else if ((CC_FIND(int2, int3) == 1)) {
        int10 = script6355();
        int11 = script6356();
        int12 = CC_GETWIDTH();
        int13 = CC_GETHEIGHT();
    } else {
        return -1;
    };
    var int14 = 0;
    var int15 = 0;
    IF_SETSIZE(int0, int1, 0, 0, int9);
    if (((int4 == 0) && ((int11 - int1) < 0))) {
        var int4 = 1;
        var int6 = (0 - int6);
    };
    if (((int4 == 1) && (((int11 + int13) + int1) > IF_GETHEIGHT(comp(1477, 27))))) {
        int4 = 0;
        int6 = (0 - int6);
    };
    if (((int4 == 3) && ((int10 - int0) < 0))) {
        int4 = 2;
        var int5 = (0 - int5);
    };
    if (((int4 == 2) && (((int10 + int12) + int0) > IF_GETWIDTH(comp(1477, 27))))) {
        int4 = 3;
        int5 = (0 - int5);
    };
    if ((int4 == 0)) {
        int15 = (int11 - int1);
    } else if ((int4 == 1)) {
        int15 = (int11 + int13);
    };
    if (((int4 == 0) || (int4 == 1))) {
        if (((int10 + int0) > IF_GETWIDTH(comp(1477, 27)))) {
            int14 = ((int10 - int0) + int12);
        } else {
            int14 = int10;
        };
    };
    if ((int4 == 3)) {
        int14 = (int10 - int0);
    } else if ((int4 == 2)) {
        int14 = (int10 + int12);
    };
    if (((int4 == 3) || (int4 == 2))) {
        if (((int11 + int1) > IF_GETHEIGHT(comp(1477, 27)))) {
            int15 = ((int11 - int1) + int13);
        } else {
            int15 = int11;
        };
    };
    IF_SETPOSITION((int14 + int5), (int15 + int6), 0, 0, int9);
    IF_SETHIDE(false, int9);
    IF_SETONTIMER(callback(script8789, int2, int3, int9, int7, int8), int9);
    return int4;
}