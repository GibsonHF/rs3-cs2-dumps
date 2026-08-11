//
function script5328(): void {
    var int0 = 0;
    var int1 = 1;
    var int2 = ((IF_GETWIDTH(comp(951, 24)) - ((8 - 1) * int1)) / 8);  // agidad_overlay:foreground
    var int3 = (((int2 + int1) * 8) - int1);
    IF_SETSIZE((int3 + 12), IF_GETHEIGHT(comp(951, 2)), 0, 0, comp(951, 2));  // agidad_overlay:timerbar
    CC_DELETEALL(comp(951, 24));  // agidad_overlay:foreground
    var int4 = 0;
    while ((int0 < 8)) {
        CC_CREATE(comp(951, 24), 5, (int0 * 6));  // agidad_overlay:foreground
        CC_SETGRAPHIC(5610 as graphic);
        CC_SETSIZE(6, 0, 0, 1);
        CC_SETPOSITION(int4, 0, 0, 0);
        CC_SETCOLOUR(5460819);
        CC_CREATE(comp(951, 24), 5, ((int0 * 6) + 1));  // agidad_overlay:foreground
        CC_SETGRAPHIC(5611 as graphic);
        CC_SETSIZE((int2 - 12), 0, 0, 1);
        CC_SETPOSITION((int4 + 6), 0, 0, 0);
        CC_SETHIDE(false);
        CC_SETCOLOUR(5460819);
        CC_CREATE(comp(951, 24), 5, ((int0 * 6) + 2));  // agidad_overlay:foreground
        CC_SETGRAPHIC(5612 as graphic);
        CC_SETSIZE(6, 0, 0, 1);
        CC_SETPOSITION(((int4 + int2) - 6), 0, 0, 0);
        CC_SETCOLOUR(5460819);
        CC_CREATE(comp(951, 24), 5, ((int0 * 6) + 3));  // agidad_overlay:foreground
        CC_SETGRAPHIC(5610 as graphic);
        CC_SETSIZE(6, 0, 0, 1);
        CC_SETPOSITION(int4, 0, 0, 0);
        CC_CREATE(comp(951, 24), 5, ((int0 * 6) + 4));  // agidad_overlay:foreground
        CC_SETGRAPHIC(5611 as graphic);
        CC_SETSIZE((int2 - 12), 0, 0, 1);
        CC_SETPOSITION((int4 + 6), 0, 0, 0);
        CC_SETHIDE(false);
        CC_CREATE(comp(951, 24), 5, ((int0 * 6) + 5));  // agidad_overlay:foreground
        CC_SETGRAPHIC(5612 as graphic);
        CC_SETSIZE(6, 0, 0, 1);
        CC_SETPOSITION(((int4 + int2) - 6), 0, 0, 0);
        int4 = ((int4 + int1) + int2);
        int0 = (int0 + 1);
    };
    varclient_1657 = -1;
    varclient_1658 = 0;
    return;
}