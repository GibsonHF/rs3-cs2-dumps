//
function script924(int0: int, int1: int, int2: unknown_int, int3: fontmetrics, string0: string): void {
    var int4 = (6 + (varclient_742 * 11));
    if ((strcmp(string0, "") != 0)) {
        CC_CREATE(comp(449, 3), 4, IF_GETNEXTSUBID(comp(449, 3)));
        CC_SETPOSITION(0, int4, 0, 0);
        CC_SETSIZE(16384, (11 * int0), 2, 0);
        CC_SETTEXTFONT(int3);
        CC_SETCOLOUR(varclient_1242);
        CC_SETTEXT(string0);
        CC_SETTEXTALIGN(int1, 0, 0);
        if ((int2 == 1)) {
            varclient_742 = (varclient_742 + int0);
        };
    };
    return;
}