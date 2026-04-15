//
function script4460(int0: unknown_int): void {
    var int1 = -1 as struct;
    var int2 = -1 as struct;
    var int3 = 0;
    var int4 = -1;
    var int5 = ENUM_GETOUTPUTCOUNT(5348 as cs2enum);
    while (((++int4 < int5) && (int3 == 0))) {
        int1 = enum_getvalue(0, 73, 5348 as cs2enum, int4);
        int2 = struct_getparam(int1, 6991);
        if (((varplayer_3079 < struct_getparam(int2, 4632)) && (varplayer_3079 >= script766(int2)))) {
            int3 = 1;
        };
    };
    if ((int3 == 0)) {
        return;
    };
    if ((varbitplayer_38842 == 0)) {
        return;
    };
    if ((script5539(int2) == 1)) {
        return;
    };
    IF_SETTEXT(script4263(int2, int0), comp(1178, 126));
    IF_SETHIDE(false, comp(1178, 122));
    return;
}