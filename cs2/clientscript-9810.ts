//
function script9810(int0: number, int1: number, int2: number, int3: number): void {
    if (((IF_FIND(int2) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {
        CC_SETSIZE(SCALE(script9550(int0, int1, CC_GETHEIGHT[1]()), cc_getparam(8060), cc_getparam(8059)), int1, 0, int0);
        if ((int3 != int2)) {
            CC_CALLONRESIZE();
        };
    };
    return;
}