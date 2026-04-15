//
function script282(int0: component, int1: component): void {
    var int2 = IF_GETHEIGHT(int0);
    var int3 = SCALE(varplayer_1622, 1000, int2);
    IF_SETSIZE(0, int3, 1, 0, int1);
    if ((int3 < (int2 / 4))) {
        IF_SETCOLOUR(16750115, int1);
    } else {
        IF_SETCOLOUR(295686, int1);
    };
    return;
}