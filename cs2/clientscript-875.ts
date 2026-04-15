//
function script875(int0: int, int1: int): void {
    var int2 = SCALE(int1, 100, varbitplayer_41524);
    varbitplayer_41524 = MIN(varbitplayer_41524, MAX(0, ((varbitplayer_41524 - int2) - int0)));
    return;
}