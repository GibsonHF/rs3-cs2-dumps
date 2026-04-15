//
function script6230(int0: int, int1: unknown_int): void {
    var int0 = MIN(1, int0);
    var int2 = 2457 as struct;
    if ((int0 >= 1)) {
        int2 = 2462 as struct;
    };
    var int3 = struct_getparam(int2, 4405);
    if ((int3 != -1 as struct)) {
        int2 = int3;
    };
    var int4 = script9984(int2, 1);
    var int5 = script9984(int2, 2);
    var int6 = int4;
    if ((int1 == 1)) {
        int6 = script9984(int2, 5);
    };
    if ((int6 == -1 as struct)) {
        return;
    };
    CC_SETGRAPHIC(struct_getparam(int6, 3909));
    if ((int1 == 1)) {
        CC_SETONMOUSEOVER(callback());
        CC_SETONMOUSELEAVE(callback());
        CC_SETONCLICK(callback());
    } else {
        CC_SETONMOUSEOVER(callback(script2799, -2147483645, -2147483643, int5));
        CC_SETONMOUSELEAVE(callback(script2799, -2147483645, -2147483643, int4));
        CC_SETONCLICK(callback(script6266, -2147483645, -2147483643, int0));
    };
    return;
}