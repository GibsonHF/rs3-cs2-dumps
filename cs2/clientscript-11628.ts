//
function script11628(int0: struct, int1: int, int2: int, int3: int, int4: unknown_int, int5: int, int6: int): void {
    if ((int1 == 5)) {
        return;
    };
    var int7 = script9984(int0, int1);
    var int8 = script9984(int0, 2);
    var int9 = script9984(int0, 3);
    if (((int7 != -1 as struct) && (int8 != -1 as struct))) {
        CC_SETONMOUSEOVER(callback(script11632, -2147483645, int8, int2, int3, int4));
        CC_SETONMOUSELEAVE(callback(script11631, -2147483645, int7, int8, int2, int3, int4, int5, int6));
        if ((int9 != -1)) {
            CC_SETONCLICK(callback(script11632, -2147483645, int9, int2, int3, int4));
            CC_SETONRELEASE(callback(script11631, -2147483645, int7, int8, int2, int3, int4, int5, int6));
        };
    };
    return;
}