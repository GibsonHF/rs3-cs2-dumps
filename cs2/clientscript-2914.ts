//
function script2914(int0: component, int1: struct): void {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as struct))) {
        return;
    };
    var int2 = struct_getparam(int1, 4524);
    var int3 = script10495(struct_getparam(int1, 4427));
    var int4 = script10495(int2);
    if ((IF_FIND(int0) == 1)) {
        CC_SETCOLOUR(int3);
        if ((int2 != -1)) {
            CC_SETONMOUSEOVER(callback(script1342, -2147483645, int4));
            CC_SETONMOUSELEAVE(callback(script1342, -2147483645, int3));
        };
    };
    return;
}