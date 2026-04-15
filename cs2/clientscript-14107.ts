//
function script14107(int0: component, int1: int, int2: unknown_int, int3: unknown_int): void {
    var int4 = script9952(3548 as struct);
    var int5 = struct_getparam(int4, 4398);
    var int6 = struct_getparam(int4, 4399);
    if ((((int1 == -1) && (IF_FIND(int0) == 1)) || (CC_FIND(int0, int1) == 1))) {
        CC_SETONMOUSEOVER(callback(script14104, int0, int1, int2, int3, int6));
        CC_SETONMOUSELEAVE(callback(script14105, int0, int1, int2, int3, int5));
        script14106(int0, int1, int2, int3, int5);
    };
    return;
}