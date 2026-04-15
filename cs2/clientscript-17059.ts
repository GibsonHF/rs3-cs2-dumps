//
function script17059(int0: int, int1: seq, int2: component): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script17059, int0, int1, int2), int2);
        return;
    };
    if (((varbitplayer_52293 == 0) || (varbitplayer_52294 == 0))) {
        IF_SETMODELANIM(int1, int2);
    } else {
        script19027();
    };
    IF_SETONTIMER(callback(), int2);
    return;
}