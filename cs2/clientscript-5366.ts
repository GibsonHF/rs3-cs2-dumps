//
function script5366(): void {
    var int0 = (100 / 8);
    var int1 = (varclient_1655 / int0);
    if ((MODULO(varclient_1655, int0) == 0)) {
        int1 = (int1 - 1);
    };
    var int2 = 0;
    while ((int2 < 8)) {
        if ((int2 > int1)) {
            script5367(((int2 * 6) + 3), 0);
            script5367(((int2 * 6) + 4), 0);
            script5367(((int2 * 6) + 5), 0);
        } else if ((int2 < int1)) {
            script5367(((int2 * 6) + 3), 2);
            script5367(((int2 * 6) + 4), 2);
            script5367(((int2 * 6) + 5), 2);
        } else if (((int2 == int1) && (int2 != varclient_1657))) {
            varclient_1658 = 0;
            varclient_1657 = int2;
            script5367(((int2 * 6) + 3), 1);
            script5367(((int2 * 6) + 4), 1);
            script5367(((int2 * 6) + 5), 1);
        };
        int2 = (int2 + 1);
    };
    return;
}