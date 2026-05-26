//
function script5463(): void {
    if ((varclient_1676 == 0)) {
        varclient_1676 = 1;
        IF_SETHIDE(1, 75956255);
        IF_SETSIZE(IF_GETWIDTH(75956247), 37, 0, 0, 75956247);
        IF_SET2DANGLE(16384, 75956279);
    } else {
        varclient_1676 = 0;
        IF_SETHIDE(0, 75956255);
        IF_SET2DANGLE(49152, 75956279);
        script5464();
    };
    return;
}