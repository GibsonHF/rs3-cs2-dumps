//
function script12267(int0: component): void {
    var int1 = SCALE(varplayer_6139, 100, 100);
    var int2 = MAX(0, MIN(445, SCALE(445, 100, int1)));
    IF_SETSIZE(int2, IF_GETHEIGHT(int0), 0, 0, int0);
    return;
}