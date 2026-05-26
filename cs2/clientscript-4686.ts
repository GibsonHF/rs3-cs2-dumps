//
function script4686(): void {
    if ((varclient_1538 >= 160)) {
        return;
    };
    if ((varclient_1539 == 1)) {
        varclient_1538 = 160;
        IF_SETPOSITION(0, 75, 0, 0, 29294607);
        return;
    };
    if ((varclient_1538 == 158)) {
        IF_SETHIDE(1, 29294607);
    } else {
        IF_SETPOSITION((-2 - varclient_1538), 75, 0, 0, 29294607);
        varclient_1538 = (varclient_1538 + 2);
    };
    return;
}