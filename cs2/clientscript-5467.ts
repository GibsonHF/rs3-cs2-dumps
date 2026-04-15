//
function script5467(): void {
    varclient_1674 = (varclient_1674 + 1);
    varclient_1675 = (varclient_1675 + 1);
    if ((varclient_1674 < 17)) {
        IF_SETPOSITION(0, varclient_1674, 1, 0, comp(1159, 22));
    } else {
        IF_SETPOSITION(0, 17, 1, 0, comp(1159, 22));
    };
    if ((varclient_1675 < 3)) {
        IF_SETPOSITION(3, varclient_1675, 2, 2, comp(1159, 23));
    } else {
        IF_SETPOSITION(3, 3, 2, 2, comp(1159, 23));
        IF_SETONTIMER(callback(), comp(1159, 30));
    };
    return;
}