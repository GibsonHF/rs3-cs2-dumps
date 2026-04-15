//
function script14341(int0: obj): int {
    var int1 = 0;
    var int2 = 0;
    if (((varbitplayer_45141 <= 1) || (varbitplayer_45140 != 0))) {
        [int1, int2] = script5788();
    } else {
        [int1, int2] = script5787(varbitplayer_45141);
    };
    var int3 = script14340(int0, int1, script14337());
    if ((int3 != -1)) {
        return int3;
    };
    return script14340(int0, 0, int1);
}