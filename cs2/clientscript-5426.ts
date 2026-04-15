//
function script5426(): void {
    varclient_1685 = (varclient_1685 - 2);
    if ((varclient_1685 > -60)) {
        IF_SETPOSITION(varclient_1685, 0, 0, 1, comp(1159, 28));
    } else {
        IF_SETONTIMER(callback(), comp(1159, 30));
        IF_SETHIDE(1, 75956252);
    };
    return;
}