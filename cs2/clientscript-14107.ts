//
function script14107(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = script9952(3548);
    var int5 = struct_getparam(int4, 4398);
    var int6 = struct_getparam(int4, 4399);
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            CC_SETONMOUSEOVER(callback(script14104, int0, int1, int2, int3, int6));
            CC_SETONMOUSELEAVE(callback(script14105, int0, int1, int2, int3, int5));
            script14106(int0, int1, int2, int3, int5);
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONMOUSEOVER(callback(script14104, int0, int1, int2, int3, int6));
        CC_SETONMOUSELEAVE(callback(script14105, int0, int1, int2, int3, int5));
        script14106(int0, int1, int2, int3, int5);
    };
    return;
}