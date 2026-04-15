//
function script14411(int0: component, int1: struct, int2: int, int3: int, int4: int, int5: unknown_int, int6: int, int7: unknown_int): void {
    var int8 = -1 as struct;
    var int9 = 1;
    [int8, int9] = script14412(int0, int4, int1, int6, int5, 0);
    if ((int8 == -1 as struct)) {
        return;
    };
    var int10 = struct_getparam(int8, 3808);
    var int11 = struct_getparam(int8, 3807);
    if (((int10 <= 0) || (int11 <= 0))) {
        int10 = struct_getparam(int8, 3915);
        int11 = struct_getparam(int8, 3916);
    };
    var string0 = "";
    CC_CREATE(int0, 5, int4);
    CC_SETGRAPHIC(script9795(int8, int9));
    CC_SETCOLOUR(struct_getparam(int8, 7448));
    CC_SETSIZE(int10, int11, 0, 0);
    CC_SETPOSITION(int2, int3, 0, 0);
    if ((int7 == 1)) {
        CC_SETONVARTRANSMIT(callback(script14406, -2147483645, -2147483643, int1, int5, int6, 3814, 1));
    };
    if ((int5 == 1)) {
        return;
    };
    CC_SETOP(1, "Select");
    CC_SETONMOUSEOVER(callback(script14413, -2147483645, -2147483643, int1, int6));
    CC_SETONMOUSELEAVE(callback(script14413, -2147483645, -2147483643, int1, int6));
    CC_SETONCLICK(callback(script14414, -2147483645, -2147483643, int1, int6));
    CC_SETONRELEASE(callback(script14415, -2147483645, -2147483643, int1, int6));
    return;
}