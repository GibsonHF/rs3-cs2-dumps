//
function script7620(int0: cs2enum, int1: component, int2: int, int3: int, int4: int, int5: int, int6: int): int {
    if (((varbitplayer_14110 == 1) || (int0 == -1 as cs2enum))) {
        return int6;
    };
    var int7 = (ENUM_GETOUTPUTCOUNT(int0) - 1);
    var int8 = -1 as struct;
    while ((int7 >= 0)) {
        int8 = enum_getvalue(0, 73, int0, int7);
        if ((int8 != -1 as struct)) {
            var int6 = script297(struct_getparam(int8, 3311), struct_getparam(int8, 3312), 0, 16776960, 6, int1, int2, int3, int4, int5, int6);
        };
        int7 = (int7 - 1);
    };
    return int6;
}