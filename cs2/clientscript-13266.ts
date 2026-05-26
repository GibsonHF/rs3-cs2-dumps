//
function script13266(): void {
    var int0 = IF_GETSCROLLX(33882280);
    var int1 = (IF_GETSCROLLWIDTH(33882280) - IF_GETWIDTH(33882280));
    var int2 = MIN(int1, (((int0 / 48) + 1) * 48));
    IF_SETSCROLLPOS(MIN((int0 + 4), int1), 0, 33882280);
    IF_SETSCROLLPOS(MIN((int0 + 4), int1), 0, 33882283);
    IF_SETONTIMER(callback(script13267, int2), 33882270);
    return;
}