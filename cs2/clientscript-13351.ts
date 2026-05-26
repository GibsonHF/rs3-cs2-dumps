//
function script13351(int0: number): void {
    var int1 = IF_GETSCROLLX(33882280);
    if ((int1 > int0)) {
        IF_SETSCROLLPOS(MAX((int1 - 4), int0), 0, 33882280);
        IF_SETSCROLLPOS(MAX((int1 - 4), int0), 0, 33882283);
    } else if ((int1 < int0)) {
        IF_SETSCROLLPOS(MIN((int1 + 4), int0), 0, 33882280);
        IF_SETSCROLLPOS(MIN((int1 + 4), int0), 0, 33882283);
    } else {
        IF_SETONTIMER(callback(), 33882270);
        script10503();
    };
    return;
}