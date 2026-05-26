//
function script10532(): void {
    var int0 = IF_GETSCROLLY(33882280);
    var int1 = MAX(0, (((int0 / 48) - 1) * 48));
    IF_SETSCROLLPOS(0, MAX((int0 - 4), 0), 33882280);
    IF_SETSCROLLPOS(0, MAX((int0 - 4), 0), 33882283);
    IF_SETONTIMER(callback(script13267, int1), 33882270);
    return;
}