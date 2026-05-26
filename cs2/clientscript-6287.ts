//
function script6287(): void {
    if ((varclient_1931 < 0)) {
        varclient_1931 = 0;
    };
    if ((varclient_1931 == 0)) {
        varclient_1931 = 1;
        IF_SETHIDE(0, 84934657);
        IF_SET2DANGLE(32768, 84934660);
    } else {
        varclient_1931 = 0;
        IF_SETHIDE(1, 84934657);
        IF_SET2DANGLE(0, 84934660);
    };
    return;
}