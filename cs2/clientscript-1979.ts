//
function script1979(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    if ((int0 == comp(1035, 11))) {
        int2 = MIN(250, varbitplayer_21658);
    } else {
        int2 = MIN(250, varbitplayer_21658);
    };
    int1 = SCALE(IF_GETHEIGHT(IF_GETLAYER(comp(1035, 11))), 250, int2);
    if ((IF_GETHEIGHT(int0) != int1)) {
        IF_SETONTIMER(callback(script1980, int1, int0), IF_GETLAYER(int0));
    };
    return;
}