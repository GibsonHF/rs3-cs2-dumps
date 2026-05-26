//
function script13349(int0: number): void {
    var int1 = IF_GETSCROLLY(33882280);
    if ((int1 > int0)) {
        IF_SETSCROLLPOS(0, MAX((int1 - 4), int0), 33882280);
        IF_SETSCROLLPOS(0, MAX((int1 - 4), int0), 33882283);
    } else if ((int1 < int0)) {
        IF_SETSCROLLPOS(0, MIN((int1 + 4), int0), 33882280);
        IF_SETSCROLLPOS(0, MIN((int1 + 4), int0), 33882283);
    } else {
        IF_SETONTIMER(callback(), 33882270);
        script10503();
    };
    return;
}