//
function script5328(): void {
    var int0 = 0;
    var int1 = 1;
    var int2 = ((IF_GETWIDTH(62324760) - ((8 - 1) * int1)) / 8);
    var int3 = (((int2 + int1) * 8) - int1);
    IF_SETSIZE((int3 + 12), IF_GETHEIGHT(62324738), 0, 0, 62324738);
    CC_DELETEALL(62324760);
    var int4 = 0;
    while ((int0 < 8)) {
        CC_CREATE(62324760, 5, (int0 * 6));
        CC_SETGRAPHIC(5610);
        CC_SETSIZE(6, 0, 0, 1);
        CC_SETPOSITION(int4, 0, 0, 0);
        CC_SETCOLOUR(5460819);
        CC_CREATE(62324760, 5, ((int0 * 6) + 1));
        CC_SETGRAPHIC(5611);
        CC_SETSIZE((int2 - 12), 0, 0, 1);
        CC_SETPOSITION((int4 + 6), 0, 0, 0);
        CC_SETHIDE(0);
        CC_SETCOLOUR(5460819);
        CC_CREATE(62324760, 5, ((int0 * 6) + 2));
        CC_SETGRAPHIC(5612);
        CC_SETSIZE(6, 0, 0, 1);
        CC_SETPOSITION(((int4 + int2) - 6), 0, 0, 0);
        CC_SETCOLOUR(5460819);
        CC_CREATE(62324760, 5, ((int0 * 6) + 3));
        CC_SETGRAPHIC(5610);
        CC_SETSIZE(6, 0, 0, 1);
        CC_SETPOSITION(int4, 0, 0, 0);
        CC_CREATE(62324760, 5, ((int0 * 6) + 4));
        CC_SETGRAPHIC(5611);
        CC_SETSIZE((int2 - 12), 0, 0, 1);
        CC_SETPOSITION((int4 + 6), 0, 0, 0);
        CC_SETHIDE(0);
        CC_CREATE(62324760, 5, ((int0 * 6) + 5));
        CC_SETGRAPHIC(5612);
        CC_SETSIZE(6, 0, 0, 1);
        CC_SETPOSITION(((int4 + int2) - 6), 0, 0, 0);
        int4 = ((int4 + int1) + int2);
        int0 = (int0 + 1);
    };
    varclient_1657 = -1;
    varclient_1658 = 0;
    return;
}