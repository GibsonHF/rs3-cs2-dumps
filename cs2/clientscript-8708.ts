//
function script8708(int0: int, int1: int): void {
    var int2 = script10405(int0);
    if ((int2 == -1 as struct)) {
        return;
    };
    var int3 = struct_getparam(int2, 3503);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    var int4 = script1886(int0);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = IF_GETWIDTH(int4);
    var int15 = IF_GETHEIGHT(int4);
    [int5, int6, int13, int13, int7, int8, int9, int10, int11, int12, int13] = script8701(9, int0);
    int7 = script8712(int7, int14);
    int8 = script8712(int8, int15);
    if ((((int0 == 1001) && (int1 == 8)) && ((int7 != 800) || (int8 != 576)))) {
        return;
    };
    int5 = script8710(int5, int7, int14);
    int6 = script8710(int6, int8, int15);
    script8709(int1, int0, int5, int6, int7, int8, int9, int10, int11, int12);
    return;
}