//
function script7727(int0: component): void {
    var int1 = MAX(0, MIN(445, SCALE(445, 200, varclient_2770)));
    var int2 = IF_GETWIDTH(int0);
    var int3 = MAX(0, (int1 - int2));
    var int4 = 1;
    if ((int3 > 10)) {
        int4 = 5;
    };
    if (((int2 < 445) && (int2 < int1))) {
        IF_SETSIZE((int2 + int4), IF_GETHEIGHT(int0), 0, 0, int0);
    };
    return;
}