//
function script12135(int0: int, int1: component, int2: component): unknown_int {
    var int3 = (int0 + 1);
    if ((TESTBIT(varbitplayer_30242, int0) == 1)) {
        stack(24226);
        stack(int2);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, int2);
        IF_SETTRANS(128, int1);
        IF_SETHIDE(0, int1);
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