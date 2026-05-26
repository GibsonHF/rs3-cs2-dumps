//
function script12135(int0: number, int1: number, int2: number): number {
    var int3 = (int0 + 1);
    if ((TESTBIT(varbitplayer_30242, int0) == 1)) {
        IF_SETGRAPHIC(24226 as graphic, int2);
        IF_SETHIDE(false, int2);
        IF_SETTRANS(128, int1);
        IF_SETHIDE(false, int1);
        return 0;
    };
    IF_SETHIDE(true, int2);
    if ((script12134(int3) == 1)) {
        IF_SETHIDE(true, int1);
    } else {
        IF_SETHIDE(false, int1);
        IF_SETTRANS(0, int1);
    };
    return 0;
}