//
function script15779(): void {
    IF_SETONRESIZE(callback(script15779), comp(685, 15));
    var int0 = IF_GETHEIGHT(comp(685, 0));
    var int1 = 25;
    var int2 = 110;
    var int3 = 292;
    var int4 = 15;
    if ((int0 <= 550)) {
        int1 = 25;
        int2 = 85;
        int3 = 262;
        int4 = 0;
    };
    IF_SETSIZE(0, int1, 1, 0, comp(685, 27));
    IF_SETPOSITION(0, int1, 1, 0, comp(685, 28));
    IF_SETSIZE(0, int2, 1, 0, comp(685, 28));
    IF_SETPOSITION(0, (int1 + int2), 1, 0, comp(685, 29));
    IF_SETSIZE(0, int1, 1, 0, comp(685, 52));
    IF_SETSIZE(0, int3, 1, 0, comp(685, 51));
    IF_SETPOSITION(0, int4, 1, 2, comp(685, 55));
    return;
}