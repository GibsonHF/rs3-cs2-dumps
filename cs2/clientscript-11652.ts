//
function script11652(int0: number): void {
    var int1 = IF_GETHEIGHT(107610120);
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), 107610125);
        return;
    };
    if ((int1 > int0)) {
        IF_SETSIZE(0, (int1 - 1), 1, 0, 107610120);
    } else {
        IF_SETSIZE(0, (int1 + 2), 1, 0, 107610120);
    };
    IF_SETONTIMER(callback(script11652, int0), 107610125);
    return;
}