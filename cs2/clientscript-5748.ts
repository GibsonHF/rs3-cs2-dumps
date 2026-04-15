//
function script5748(int0: component, int1: int): void {
    var int2 = 3;
    var int3 = ((5 * (varbitplayer_35716 / 5)) + 3);
    if ((int3 < ((5 * 10) + 3))) {
        int3 = ((5 * 10) + 3);
    };
    while ((int2 <= int3)) {
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETHIDE(true);
        };
        int2 = (int2 + 5);
    };
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETHIDE(false);
    };
    return;
}