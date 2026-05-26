//
function script14721(int0: number, int1: number): void {
    var int2 = IF_GETTRANS(102432768);
    if ((int2 == int0)) {
        IF_SETONTIMER(callback(), 102432768);
    } else if ((int2 < int0)) {
        IF_SETTRANS(MIN(int0, (int2 + int1)), 102432768);
    } else {
        IF_SETTRANS(MAX(int0, (int2 - int1)), 102432768);
    };
    return;
}