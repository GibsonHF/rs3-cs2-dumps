//
function script12742(): [int, int] {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int1, int2] = script12705(varbitplayer_33712);
    int3 = enum_getvalue(0, 0, 11607 as cs2enum, varbitplayer_33713);
    if (((varbitplayer_33713 + 1) < int0)) {
        return [int3, int3];
    };
    if (((varbitplayer_33713 + 1) > int0)) {
        return [0, int3];
    };
    return [int1, int3];
}