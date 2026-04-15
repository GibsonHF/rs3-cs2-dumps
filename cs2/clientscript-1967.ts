//
function script1967(): void {
    var int0 = IF_GETWIDTH(comp(871, 0));
    var int1 = IF_GETWIDTH(comp(871, 3));
    var int2 = IF_GETWIDTH(comp(871, 11));
    if ((script6431() == true)) {
        [int0, int2] = [492, 232];
    };
    if ((IF_FIND(comp(871, 0)) == 1)) {
        CC_SETSIZE(int0, CC_GETHEIGHT(), 0, 0);
    };
    if ((IF_FIND(comp(871, 3)) == 1)) {
        CC_SETSIZE(int1, CC_GETHEIGHT(), 0, 0);
    };
    if ((IF_FIND(comp(871, 11)) == 1)) {
        CC_SETSIZE(int2, CC_GETHEIGHT(), 0, 0);
    };
    script3198();
    script3840();
    return;
}