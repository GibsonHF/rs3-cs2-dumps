//
function script2574(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = SCALE(varbitplayer_5647, 1000, 100);
    if ((int2 < 1)) {
        int2 = 1;
    };
    if ((int2 > 100)) {
        int2 = 100;
    };
    int0 = enum_getvalue(0, 0, 197 as cs2enum, int2);
    int1 = enum_getvalue(0, 0, 198 as cs2enum, int2);
    if ((varbitplayer_5617 == 1)) {
        IF_SETPOSITION(481, int0, 0, 0, 51183649);
        IF_SETSIZE(16, int1, 0, 0, 51183649);
    } else if ((varbitplayer_5617 == 2)) {
        IF_SETPOSITION(481, int0, 0, 0, 51183641);
        IF_SETSIZE(16, int1, 0, 0, 51183641);
    };
    if ((int2 < 25)) {
        if ((varbitplayer_5617 == 1)) {
            IF_SETCOLOUR(16750848, 51183649);
        } else if ((varbitplayer_5617 == 2)) {
            IF_SETCOLOUR(16750848, 51183641);
        };
    } else if ((varbitplayer_5617 == 1)) {
        IF_SETCOLOUR(6710784, 51183649);
    } else if ((varbitplayer_5617 == 2)) {
        IF_SETCOLOUR(2639365, 51183641);
    };
    return;
}