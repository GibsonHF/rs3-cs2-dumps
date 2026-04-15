//
function script14339(int0: inv, int1: obj): int {
    if ((int0 == 94 as inv)) {
        var int1 = script8156(int1);
    };
    if ((script3802(int1) == false)) {
        return script14342(int1, 0, 1);
    };
    var int2 = 0;
    var int3 = 0;
    if ((varbitplayer_45141 < 2)) {
        [int2, int3] = script5788();
    } else {
        [int2, int3] = script5787(varbitplayer_45141);
    };
    var int4 = script14340(int1, int2, script14337());
    if ((int4 != -1)) {
        return int4;
    };
    return script14340(int1, 0, int2);
}