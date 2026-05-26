//
function script10977(): void {
    var int0 = IF_GETHEIGHT(103743497);
    if ((int0 > 5)) {
        IF_SETSIZE(417, MAX((int0 - 5), 5), 0, 0, 103743497);
    } else {
        IF_SETONTIMER(callback(), 103743497);
    };
    return;
}