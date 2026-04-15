//
function script11652(int0: int): void {
    var int1 = IF_GETHEIGHT(comp(1642, 8));
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), comp(1642, 13));
        return;
    };
    if ((int1 > int0)) {
        IF_SETSIZE(0, (int1 - 1), 1, 0, comp(1642, 8));
    } else {
        IF_SETSIZE(0, (int1 + 2), 1, 0, comp(1642, 8));
    };
    IF_SETONTIMER(callback(script11652, int0), comp(1642, 13));
    return;
}