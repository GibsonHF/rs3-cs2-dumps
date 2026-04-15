//
function script878(int0: int, int1: int): void {
    var int2 = script859();
    var int3 = SCALE(int1, 100, int2);
    var int4 = MIN(32767, ((int2 + int0) + SCALE(int1, 100, int2)));
    varbitplayer_41524 = MIN(MAX(varbitplayer_41524, int4), ((varbitplayer_41524 + int0) + int3));
    return;
}