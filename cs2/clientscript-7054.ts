//
function script7054(int0: unknown_int, int1: int, int2: unknown_int, int3: struct, int4: unknown_int): void {
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as obj;
    var int8 = -1 as struct;
    var int9 = script7975(int0, int1);
    [int5, int6, int7] = script11797(script11798(int0), int1);
    int8 = enum_getvalue(0, 73, 6740 as cs2enum, int6);
    if ((int5 != 6)) {
        IF_SETONVARTRANSMIT(callback(), int9);
        IF_SETTRANS(255, int9);
        IF_SETONTIMER(callback(), int9);
        IF_SETCOLOUR(9868950, int9);
        return;
    };
    if ((int8 != int3)) {
        IF_SETONVARTRANSMIT(callback(), int9);
        IF_SETTRANS(255, int9);
        IF_SETONTIMER(callback(), int9);
        IF_SETCOLOUR(9868950, int9);
        return;
    };
    if ((int4 == 1)) {
        IF_SETCOLOUR(16750230, int9);
    } else {
        IF_SETCOLOUR(9868950, int9);
    };
    if ((int2 == 1)) {
        IF_SETTRANS(MIN((IF_GETTRANS(int9) + 5), 255), int9);
        if ((IF_GETTRANS(int9) >= 255)) {
            var int2 = 0;
        };
    } else {
        IF_SETTRANS(MAX((IF_GETTRANS(int9) - 5), 0), int9);
        if ((IF_GETTRANS(int9) <= 0)) {
            int2 = 1;
        };
    };
    return;
}