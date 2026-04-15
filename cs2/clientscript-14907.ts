//
function script14907(): void {
    var int0 = IF_GETWIDTH(comp(660, 0));
    var int1 = IF_GETWIDTH(comp(660, 3));
    var int2 = IF_GETWIDTH(comp(660, 11));
    if ((script6431() == true)) {
        [int0, int2] = [492, 232];
    };
    if ((IF_FIND(comp(660, 0)) == 1)) {
        CC_SETSIZE(int0, CC_GETHEIGHT(), 0, 0);
    };
    if ((IF_FIND(comp(660, 3)) == 1)) {
        CC_SETSIZE(int1, CC_GETHEIGHT(), 0, 0);
    };
    if ((IF_FIND(comp(660, 11)) == 1)) {
        CC_SETSIZE(int2, CC_GETHEIGHT(), 0, 0);
    };
    script14909();
    script14911();
    return;
}