//
function script6604(int0: component): void {
    var int1 = IF_GETWIDTH(int0);
    var int2 = IF_GETHEIGHT(int0);
    var int3 = SCALE(503, 765, 10000);
    if ((SCALE(int2, int1, 10000) < int3)) {
        IF_SETSIZE(SCALE(765, 503, int2), 0, 0, 1, int0);
    } else {
        IF_SETSIZE(0, SCALE(503, 765, int1), 1, 0, int0);
    };
    return;
}