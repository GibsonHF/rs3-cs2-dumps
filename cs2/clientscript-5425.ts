//
function script5425(): void {
    varclient_1685 = (varclient_1685 + 2);
    if ((varclient_1685 <= 40)) {
        IF_SETPOSITION(varclient_1685, 0, 0, 1, comp(1159, 28));
    } else {
        IF_SETONTIMER(callback(script5426), comp(1159, 30));
    };
    return;
}