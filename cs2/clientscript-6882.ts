//
function script6882(int0: struct): int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    var int1 = struct_getparam(int0, 2772);
    var int2 = 2339 as cs2enum;
    if ((GENDER() == 1)) {
        int2 = 2342 as cs2enum;
    };
    if ((int1 == enum_getvalue(10, 0, int2, varplayer_261))) {
        return 1;
    };
    return 0;
}