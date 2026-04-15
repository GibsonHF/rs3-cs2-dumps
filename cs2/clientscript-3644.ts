//
function script3644(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((IF_FIND[1](IF_GETPARENTLAYER(int0)) == 1)) {
        int3 = CC_GETWIDTH[1]();
        int4 = CC_GETHEIGHT[1]();
        [int1, int2] = IF_GETGRAPHICDIMENSIONS(int0);
        if (((int1 < 1) || (int2 < 1))) {
            return;
        };
        if (((int1 < int3) && (int2 < int4))) {
            IF_SETSIZE(int1, int2, 0, 0, int0);
            return;
        };
        if ((SCALE(int3, int1, int2) < int4)) {
            IF_SETSIZE(int3, SCALE(int3, int1, int2), 0, 0, int0);
        } else {
            IF_SETSIZE(SCALE(int4, int2, int1), int4, 0, 0, int0);
        };
    };
    return;
}