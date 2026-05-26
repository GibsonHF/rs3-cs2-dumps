//
function script5873(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETTEXT(varclient_2381, int0);
    if ((varclient_1233 > 200)) {
        varclient_1233 = 200;
    };
    var int4 = varclient_1233;
    int4 = (((int4 * 37) / 40) + 14);
    IF_SETSIZE(int4, 18, 1, 0, int1);
    IF_SETPOSITION((int4 + 1), 15, 0, 0, int2);
    if ((varclient_1233 == 200)) {
        IF_SETCOLOUR(6619135, int3);
    } else {
        IF_SETCOLOUR(16777215, int3);
    };
    return;
}