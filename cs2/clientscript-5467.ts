//
function script5467(): void {
    varclient_1674 = (varclient_1674 + 1);
    varclient_1675 = (varclient_1675 + 1);
    if ((varclient_1674 < 17)) {
        IF_SETPOSITION(0, varclient_1674, 1, 0, 75956246);
    } else {
        IF_SETPOSITION(0, 17, 1, 0, 75956246);
    };
    if ((varclient_1675 < 3)) {
        IF_SETPOSITION(3, varclient_1675, 2, 2, 75956247);
    } else {
        IF_SETPOSITION(3, 3, 2, 2, 75956247);
        IF_SETONTIMER(callback(), 75956254);
    };
    return;
}