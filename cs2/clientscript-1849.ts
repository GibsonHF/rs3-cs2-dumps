//
function script1849(int0: struct, int1: component, int2: component, int3: int, int4: int): int {
    if ((int2 == comp(-1, 65535))) {
        return -1;
    };
    var int5 = script12377(script8403(int2), 0, IF_GETWIDTH(int2));
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if (((struct_getparam(int0, 8296) == 2) && (int1 != comp(-1, 65535)))) {
        var int4 = 0;
        int10 = script8374(int2);
        [int7, int8] = script20533(int2, int3);
        if (((int7 <= 1) && (int8 < int10))) {
            int8 = MAX(1, int10);
        };
        int9 = script12377((((int5 + int4) + (int3 / 2)) / int3), 0, int8);
        if ((int7 > 1)) {
            int6 = script12377(script8404(int1), 0, IF_GETHEIGHT(int1));
            int6 = (int6 / (IF_GETHEIGHT(int1) / int7));
            int9 = script12377((int9 + (int8 * int6)), 0, int10);
        };
        return int9;
    };
    int9 = ((((int5 + int4) + IF_GETSCROLLX(int2)) + (int3 / 2)) / int3);
    int9 = MAX(0, MIN(int9, script8374(int2)));
    return int9;
}