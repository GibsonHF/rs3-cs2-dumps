//
function script12965(): void {
    var int0 = IF_GETSCROLLY(33882280);
    var int1 = (IF_GETSCROLLHEIGHT(33882280) - IF_GETHEIGHT(33882280));
    var int2 = MIN(int1, (((int0 / 48) + 1) * 48));
    IF_SETSCROLLPOS(0, MIN((int0 + 4), int1), 33882280);
    IF_SETSCROLLPOS(0, MIN((int0 + 4), int1), 33882283);
    IF_SETONTIMER(callback(script13267, int2), 33882270);
    return;
}