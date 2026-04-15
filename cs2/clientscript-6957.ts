//
function script6957(int0: component): void {
    var int1 = SCALE(varplayer_4393, varplayer_4394, 100);
    var int2 = MAX(0, MIN(445, SCALE(445, 100, int1)));
    IF_SETSIZE(int2, IF_GETHEIGHT(int0), 0, 0, int0);
    return;
}