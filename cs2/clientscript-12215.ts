//
function script12215(): void {
    var int0 = IF_GETHEIGHT(112525316);
    var int1 = IF_GETHEIGHT(112525365);
    var int2 = ((int0 * 100) / 2500);
    var int3 = MAX(1, ((int2 * varbitplayer_30383) / 100));
    if ((varbitplayer_30383 == 2500)) {
        int3 = int0;
    };
    if ((int3 > int1)) {
        IF_SETSIZE(IF_GETWIDTH(112525365), (int1 + 1), 0, 0, 112525365);
    } else {
        varclient_5126 = varbitplayer_30383;
        IF_SETONTIMER(callback(), 112525365);
    };
    return;
}