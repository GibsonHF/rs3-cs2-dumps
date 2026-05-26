//
function script10978(): void {
    var int0 = IF_GETHEIGHT(103743496);
    if ((int0 > 5)) {
        IF_SETSIZE(417, MAX((int0 - 5), 5), 0, 0, 103743496);
    } else {
        IF_SETONTIMER(callback(), 103743496);
    };
    return;
}