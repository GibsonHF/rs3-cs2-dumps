//
function script11782(int0: component): void {
    var int1 = IF_GETHEIGHT(comp(1667, 6));
    var int2 = (int1 / 2);
    var int3 = MAX(1, SCALE(int2, 100, varplayer_5843));
    if ((varplayer_5843 == 100)) {
        if ((IF_GETHEIGHT(comp(1667, 9)) < 310)) {
            IF_SETTEXTFONT(31 as fontmetrics, comp(1667, 9));
        };
        int3 = (int2 + 1);
    };
    if ((IF_GETHEIGHT(int0) < int3)) {
        IF_SETSIZE(0, MIN((IF_GETHEIGHT(int0) + 1), int3), 1, 0, int0);
    } else {
        IF_SETSIZE(0, MAX((IF_GETHEIGHT(int0) - 1), int3), 1, 0, int0);
    };
    IF_SETONTIMER(callback(script11782, int0), int0);
    return;
}