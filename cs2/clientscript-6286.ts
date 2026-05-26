//
function script6286(): void {
    if ((varclient_1929 < 0)) {
        varclient_1929 = 0;
    };
    if ((varclient_1929 == 0)) {
        varclient_1929 = 1;
        IF_SETHIDE(1, 84934678);
        IF_SETHIDE(0, 84934662);
        IF_SETPOSITION(120, 2, 2, 0, 84934679);
    } else {
        varclient_1929 = 0;
        IF_SETHIDE(0, 84934678);
        IF_SETHIDE(1, 84934662);
        IF_SETPOSITION(120, 60, 2, 0, 84934679);
    };
    return;
}