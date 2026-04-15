//
function script14414(int0: component, int1: int, int2: struct, int3: int): void {
    var int4 = -1 as struct;
    var int5 = 1;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int3 >= 0)) {
            var int3 = (1 - int3);
            [int4, int5] = script14412(int0, int1, int2, int3, 0, 1);
            CC_SETONCLICK(callback(script14414, -2147483645, -2147483643, int2, int3));
            CC_SETONRELEASE(callback(script14415, -2147483645, -2147483643, int2, int3));
            CC_SETONMOUSEOVER(callback(script14413, -2147483645, -2147483643, int2, int3));
            CC_SETONMOUSELEAVE(callback(script14413, -2147483645, -2147483643, int2, int3));
        };
        CC_SETGRAPHIC(script9795(int4, int5));
        CC_SETCOLOUR(struct_getparam(int4, 7448));
    };
    return;
}