//
function script2438(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = SCALE(varbitplayer_3938, 1000, 100);
    if ((int2 > 100)) {
        int2 = 100;
    };
    IF_SETSIZE(IF_GETWIDTH(983044), SCALE(int2, 100, IF_GETHEIGHT(983045)), 0, 0, 983044);
    if ((int2 < 25)) {
        IF_SETCOLOUR(16750848, 983044);
    } else {
        IF_SETCOLOUR(26112, 983044);
    };
    return;
}