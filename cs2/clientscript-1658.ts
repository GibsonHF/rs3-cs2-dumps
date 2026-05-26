//
function script1658(): void {
    if ((varclient_1734 == 1)) {
        IF_SET2DANGLE(0, 77332523);
        IF_SETHIDE(0, 77332521);
        IF_SETSIZE(172, 179, 0, 0, 77332486);
        IF_SETOP(1, "Hide", 77332523);
        varclient_1734 = 0;
    } else {
        IF_SET2DANGLE(32768, 77332523);
        IF_SETHIDE(1, 77332521);
        IF_SETSIZE(172, 50, 0, 0, 77332486);
        IF_SETOP(1, "Unhide", 77332523);
        varclient_1734 = 1;
    };
    return;
}