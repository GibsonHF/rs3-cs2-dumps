//
function script4698(): void {
    var int0 = 0;
    int0 = (varclient_1545 / 2);
    IF_SETSIZE(((int0 * 16384) / 100), IF_GETHEIGHT(comp(500, 15)), 2, 0, comp(500, 15));  // loy_defence:progbar_fill
    if ((int0 < 97)) {
        IF_SETHIDE(true, comp(500, 16));  // loy_defence:progbar_end_r
    };
    return;
}