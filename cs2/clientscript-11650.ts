//
function script11650(): void {
    var int0 = SCALE(varbitplayer_28441, 1500, 100);
    var int1 = 257;
    if ((script6431() == true)) {
        int1 = 143;
    };
    var int2 = SCALE(int1, 100, int0);
    int2 = (int2 + 37);
    IF_SETONTIMER(callback(script11652, int2), comp(1642, 13));
    script5702();
    return;
}