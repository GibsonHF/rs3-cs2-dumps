//
function script10512(): void {
    var int0 = ((varplayer_10713 * 60) / 100);
    var int1 = (int0 / 60);
    var int2 = MODULO(int0, 60);
    IF_SETTEXT(script5729(-1, int1, int2, false, false), comp(1080, 16));
    return;
}