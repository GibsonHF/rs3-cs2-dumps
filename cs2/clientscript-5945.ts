//
function script5945(int0: number, int1: number): void {
    var int2 = 82051072;
    var int3 = 82051073;
    var int4 = MAX(1, IF_GETWIDTH(int2));
    var int5 = MAX(1, IF_GETHEIGHT(int2));
    if (((int4 > 0) && (int5 > 0))) {
        varclient_1787 = MAX(1, int0);
        varclient_1788 = MAX(1, int1);
        varclient_1787 = MIN(varclient_1787, (int4 - IF_GETWIDTH(int3)));
        varclient_1788 = MIN(varclient_1788, (int5 - IF_GETHEIGHT(int3)));
    };
    IF_SETPOSITION(SCALE(varclient_1787, int4, 16384), SCALE(varclient_1788, int5, 16384), 3, 3, int3);
    return;
}