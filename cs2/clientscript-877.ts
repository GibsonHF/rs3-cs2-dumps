//
function script877(int0: int, int1: int): void {
    var int2 = script859();
    var int3 = SCALE(int1, 100, int2);
    if ((varbitplayer_41524 < int2)) {
        varbitplayer_41524 = MIN(int2, ((varbitplayer_41524 + int0) + int3));
    } else {
        varbitplayer_41524 = MAX(int2, ((varbitplayer_41524 - int0) - int3));
    };
    return;
}