//
function script1967(): void {
    var int0 = IF_GETWIDTH(57081856);
    var int1 = IF_GETWIDTH(57081859);
    var int2 = IF_GETWIDTH(57081867);
    if ((script6431() == 1)) {
        [int0, int2] = [492, 232];
    };
    if ((IF_FIND(57081856) == 1)) {
        CC_SETSIZE(int0, CC_GETHEIGHT(), 0, 0);
    };
    if ((IF_FIND(57081859) == 1)) {
        CC_SETSIZE(int1, CC_GETHEIGHT(), 0, 0);
    };
    if ((IF_FIND(57081867) == 1)) {
        CC_SETSIZE(int2, CC_GETHEIGHT(), 0, 0);
    };
    script3198();
    script3840();
    return;
}