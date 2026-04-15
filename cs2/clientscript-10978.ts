//
function script10978(): void {
    var int0 = IF_GETHEIGHT(comp(1583, 8));
    if ((int0 > 5)) {
        IF_SETSIZE(417, MAX((int0 - 5), 5), 0, 0, comp(1583, 8));
    } else {
        IF_SETONTIMER(callback(), comp(1583, 8));
    };
    return;
}