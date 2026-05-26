//
function script2093(): void {
    if ((varclient_654 < 100)) {
        varclient_654 = (varclient_654 + 1);
    };
    if ((varclient_654 == 50)) {
        IF_SETHIDE(true, comp(834, 36));
    };
    if ((varclient_654 == 100)) {
        IF_SETHIDE(false, comp(834, 36));
        varclient_654 = 0;
    };
    return;
}