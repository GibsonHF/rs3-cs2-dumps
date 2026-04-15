//
function script462(int0: component, int1: struct): void {
    var int2 = struct_getparam(int1, 4405);
    if ((int2 != -1 as struct)) {
        var int1 = int2;
    };
    var int3 = script9984(int1, 1);
    var int4 = script9984(int1, 2);
    var int5 = script9984(int1, 3);
    var int6 = int3;
    if ((int6 == -1 as struct)) {
        return;
    };
    CC_CREATE(int0, 5, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(struct_getparam(int6, 3909));
    CC_SETONVARTRANSMIT(callback(script462, -2147483645, int1, 3814, 1));
    if (((int3 != -1) && (int4 != -1 as struct))) {
        CC_SETONMOUSEOVER(callback(script13918, -2147483645, int4, -2147483643));
        CC_SETONMOUSELEAVE(callback(script13918, -2147483645, int3, -2147483643));
        if ((int5 != -1)) {
            CC_SETONCLICK(callback(script13918, -2147483645, int5, -2147483643));
            CC_SETONRELEASE(callback(script11631, -2147483645, int3, int4, -2147483643, -2147483643, 0, -1, -1));
        };
    };
    return;
}