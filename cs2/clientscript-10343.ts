//
function script10343(int0: number, int1: number, int2: number): void {
    if ((script13749() == 1)) {
        return;
    };
    varclient_4499 = IF_GETTEXT(int0);
    if ((script13749() == 1)) {
        varclient_4500 = STRING_LENGTH(varclient_4499);
    } else {
        varclient_4500 = script1552(int2, varclient_4499, 26, int0, -1);
    };
    IF_SETPOSITION(varclient_4500, 5, 0, 0, int1);
    script8841(53, 1);
    return;
}