//
function script10474(int0: component, int1: struct): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    var int2 = struct_getparam(int1, 4524);
    var int3 = script10495(struct_getparam(int1, 4427));
    var int4 = script10495(int2);
    CC_DELETEALL(int0);
    var int5 = script12611(int0);
    CC_CREATE(int0, 3, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETFILL(1);
    CC_SETCOLOUR(int3);
    script12591(3, int5);
    if ((int2 != -1)) {
        CC_SETONMOUSEOVER(callback(script10473, -2147483645, -2147483643, int4));
        CC_SETONMOUSELEAVE(callback(script10473, -2147483645, -2147483643, int3));
    };
    CC_SETONVARTRANSMIT(callback(script10472, int0, int1, 3814, 1));
    return;
}