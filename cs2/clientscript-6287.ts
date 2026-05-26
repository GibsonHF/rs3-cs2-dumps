//
function script6287(): void {
    if ((varclient_1931 < 0)) {
        varclient_1931 = 0;
    };
    if ((varclient_1931 == 0)) {
        varclient_1931 = 1;
        IF_SETHIDE(false, comp(1296, 1));
        IF_SET2DANGLE(32768, comp(1296, 4));
    } else {
        varclient_1931 = 0;
        IF_SETHIDE(true, comp(1296, 1));
        IF_SET2DANGLE(0, comp(1296, 4));
    };
    return;
}