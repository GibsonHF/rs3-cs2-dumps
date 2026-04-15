//
function script2438(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = SCALE(varbitplayer_3938, 1000, 100);
    if ((int2 > 100)) {
        int2 = 100;
    };
    IF_SETSIZE(IF_GETWIDTH(comp(15, 4)), SCALE(int2, 100, IF_GETHEIGHT(comp(15, 5))), 0, 0, comp(15, 4));
    if ((int2 < 25)) {
        IF_SETCOLOUR(16750848, comp(15, 4));
    } else {
        IF_SETCOLOUR(26112, comp(15, 4));
    };
    return;
}