//
function script16450(int0: component, int1: int, int2: int, int3: int, int4: struct, int5: int, int6: unknown_int, int7: int, int8: int, int9: int): [int, int, int] {
    var int10 = 0;
    if ((int6 == 1)) {
        var int3 = (int3 / 2);
        if ((MODULO(int2, 2) == 1)) {
            int10 = int3;
            var int1 = int8;
        };
    };
    var int11 = -1;
    [int11, int1] = script14749(int0, 0, int1, int2, int6);
    var int12 = int1;
    var int13 = ((int10 + 4) + 4);
    var int14 = ((int3 - (2 * 4)) - 4);
    var int15 = ((int13 + 4) + 35);
    var int16 = ((int14 - 4) - 35);
    var int17 = 16777215;
    if ((STAT_BASE(script2179(21)) < struct_getparam(int4, 2212))) {
        int17 = script10495(6);
    };
    var int18 = struct_getparam(int4, 2213);
    if ((int18 != -1 as obj)) {
        int1 = script16464(int0, int13, int1, int16, struct_getparam(int4, 2212), int18, struct_getparam(int4, 2210), int17);
    };
    var int19 = (int1 - int12);
    if (((int9 > 0) && (int7 < int19))) {
        script14750(int0, int9, int1, int6);
    } else if ((int7 > int19)) {
        int19 = int7;
    };
    int1 = script14750(int0, int11, (int12 + int19), int6);
    if ((MODULO(int2, 2) == 1)) {
        return [int1, int19, -1];
    };
    return [int1, int19, int9];
}