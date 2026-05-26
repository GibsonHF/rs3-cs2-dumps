//
function script14907(): void {
    var int0 = IF_GETWIDTH(43253760);
    var int1 = IF_GETWIDTH(43253763);
    var int2 = IF_GETWIDTH(43253771);
    if ((script6431() == 1)) {
        [int0, int2] = [492, 232];
    };
    if ((IF_FIND(43253760) == 1)) {
        CC_SETSIZE(int0, CC_GETHEIGHT(), 0, 0);
    };
    if ((IF_FIND(43253763) == 1)) {
        CC_SETSIZE(int1, CC_GETHEIGHT(), 0, 0);
    };
    if ((IF_FIND(43253771) == 1)) {
        CC_SETSIZE(int2, CC_GETHEIGHT(), 0, 0);
    };
    script14909();
    script14911();
    return;
}