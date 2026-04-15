//
function script11892(int0: int, int1: component): void {
    var int2 = 38;
    if ((int1 == comp(1687, 78))) {
        if ((SCALE(varbitplayer_29651, 500, 10) < int0)) {
            return;
        };
        int2 = 19;
    } else if ((SCALE(varclient_5098, 1000, 10) < int0)) {
        int2 = 19;
    };
    var int3 = script11886(int0, int1);
    if (((int3 != comp(-1, 65535)) && (IF_FIND(int3) == 1))) {
        IF_SETHIDE(false, int3);
        IF_SETSIZE(3, 1, 0, 0, int3);
        IF_SETONTIMER(callback(script11887, int3, int1, int2), int3);
    };
    return;
}