//
function script9812(int0: unknown_int, int1: int, int2: component, int3: component): void {
    if (((IF_FIND(int2) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {
        CC_SETSIZE(int1, SCALE(script9550(int0, int1, CC_GETWIDTH[1]()), cc_getparam(8059), cc_getparam(8060)), int0, 0);
        if ((int3 != int2)) {
            CC_CALLONRESIZE();
        };
    };
    return;
}