//
function script5437(): void {
    varclient_1683 = (varclient_1683 + 1);
    if ((varclient_1683 < 0)) {
        IF_SETPOSITION(0, varclient_1683, 1, 2, comp(1173, 54));
    } else {
        IF_SETPOSITION(0, 0, 1, 2, comp(1173, 54));
        IF_SETONTIMER(callback(), comp(1173, 8));
    };
    return;
}