//
function script2798(int0: int, int1: boolean, int2: unknown_int, int3: struct): void {
    var int0 = MIN(1, int0);
    var int4 = struct_getparam(int3, 7526);
    if ((int0 >= 1)) {
        int4 = struct_getparam(int3, 7525);
    };
    var int5 = struct_getparam(int4, 4405);
    if ((int5 != -1 as struct)) {
        int4 = int5;
    };
    var int6 = script9984(int4, 1);
    var int7 = script9984(int4, 2);
    var int8 = int6;
    if ((int1 == true)) {
        int8 = script9984(int4, 5);
    };
    if ((int8 == -1 as struct)) {
        return;
    };
    CC_SETGRAPHIC(struct_getparam(int8, 3909));
    if ((int2 == 1)) {
        CC_SETONVARTRANSMIT(callback(script1140, -2147483645, int0, int1, 3814, 1));
    };
    if ((int1 == true)) {
        CC_SETONMOUSEOVER(callback());
        CC_SETONMOUSELEAVE(callback());
        CC_SETONCLICK(callback());
    } else {
        CC_SETONMOUSEOVER(callback(script1207, -2147483645, int7));
        CC_SETONMOUSELEAVE(callback(script1207, -2147483645, int6));
        CC_SETONCLICK(callback(script1339, -2147483645, int0, int3));
    };
    return;
}