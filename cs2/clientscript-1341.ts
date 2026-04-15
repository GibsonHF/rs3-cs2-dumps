//
function script1341(int0: struct): void {
    var int1 = script10495(struct_getparam(int0, 4427));
    var int2 = struct_getparam(int0, 4524);
    var int3 = script10495(int2);
    CC_SETCOLOUR(int1);
    if ((int2 > 0)) {
        CC_SETONMOUSEOVER(callback(script1343, -2147483645, -2147483643, int3));
        CC_SETONMOUSELEAVE(callback(script1343, -2147483645, -2147483643, int1));
    };
    return;
}