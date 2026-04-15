//
function script9816(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    if (((IF_FIND(int0) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {
        int1 = CC_GETWIDTH[1]();
        int2 = CC_GETHEIGHT[1]();
        if ((SCALE(int1, cc_getparam(8059), cc_getparam(8060)) < int2)) {
            CC_SETSIZE(SCALE(int2, cc_getparam(8060), cc_getparam(8059)), int2, 0, 0);
        } else {
            CC_SETSIZE(int1, SCALE(int1, cc_getparam(8059), cc_getparam(8060)), 0, 0);
        };
        CC_CALLONRESIZE();
    };
    return;
}