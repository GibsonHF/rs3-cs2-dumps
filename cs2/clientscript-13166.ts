//
function script13166(int0: int): void {
    var int1 = -1;
    if ((int0 != -1)) {
        int1 = script13164(int0);
        if ((int1 == -1)) {
            script13230();
            return;
        };
    };
    var int2 = -1;
    if ((int1 != -1)) {
        int2 = (int1 + 1);
        int1 = (int1 - 1);
    } else {
        int2 = ENUM_GETOUTPUTCOUNT(12222 as cs2enum);
    };
    var int3 = -1 as struct;
    var int4 = -1 as struct;
    var string0 = "";
    var string1 = "";
    while ((++int1 < int2)) {
        int3 = enum_getvalue(0, 73, 12222 as cs2enum, int1);
        if ((int3 != -1 as struct)) {
            [int4, string0, string1] = script13167(script13165(int1));
            script10015(struct_getparam(int3, 4037), struct_getparam(int3, 4038), struct_getparam(int3, 4039), struct_getparam(int3, 4040), struct_getparam(int3, 6225), int4);
            if ((STRING_LENGTH(string1) > 0)) {
                IF_SETONMOUSEREPEAT(callback(script3876, string1, -2147483645, -2147483643), struct_getparam(int3, 6225));
            } else {
                IF_SETONMOUSEREPEAT(callback(), struct_getparam(int3, 6225));
            };
            if ((STRING_LENGTH(string0) > 0)) {
                IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), struct_getparam(int3, 6310));
            } else {
                IF_SETONMOUSEREPEAT(callback(), struct_getparam(int3, 6310));
            };
        };
    };
    return;
}