//
function script13961(int0: component, int1: struct, int2: boolean, int3: int): void {
    var int4 = struct_getparam(int1, 4405);
    if ((int4 != -1 as struct)) {
        var int1 = int4;
    };
    var int5 = script9984(int1, 1);
    var int6 = script9984(int1, 2);
    var int7 = script9984(int1, 3);
    var int8 = int5;
    var int9 = 1;
    if ((int3 == 1)) {
        int8 = script9984(int1, 4);
        int9 = 4;
        int5 = int8;
    } else if ((int2 == true)) {
        int8 = script9984(int1, 5);
        int9 = 5;
    } else if (((int6 != -1 as struct) && (script11903(int0) == 1))) {
        int8 = int6;
        int9 = 2;
    };
    if ((int8 == -1 as struct)) {
        if ((struct_getparam(int1, 3915) > 0)) {
            int8 = int1;
        } else {
            return;
        };
    };
    if ((IF_FIND(int0) == 1)) {
        CC_SETGRAPHIC(script9795(int8, int9));
        CC_SETCOLOUR(struct_getparam(int8, 7448));
        CC_SETONVARTRANSMIT(callback(script13958, -2147483645, int1, int2, int3, 3814, 1));
        if ((int2 == 1)) {
            CC_SETONMOUSEOVER(callback());
            CC_SETONMOUSELEAVE(callback());
            CC_SETONCLICK(callback());
            CC_SETONRELEASE(callback());
        } else if ((struct_getparam(int1, 3915) > 0)) {
            CC_SETONMOUSEOVER(callback(script13915, -2147483645, int1, 2, int3));
            CC_SETONMOUSELEAVE(callback(script13915, -2147483645, int1, 1, int3));
        } else if (((int5 != -1 as struct) && (int6 != -1 as struct))) {
            CC_SETONMOUSEOVER(callback(script13915, -2147483645, int6, 2, int3));
            CC_SETONMOUSELEAVE(callback(script13915, -2147483645, int5, 1, int3));
            if ((int7 != -1)) {
                CC_SETONCLICK(callback(script13962, -2147483645, int7, int3));
                CC_SETONRELEASE(callback(script13916, -2147483645, int1, int3));
            };
        };
    };
    return;
}