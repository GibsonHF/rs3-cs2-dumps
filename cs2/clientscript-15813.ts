//
function script15813(int0: component): void {
    var int1 = 16363 as cs2enum;
    var int2 = ENUM_GETOUTPUTCOUNT(int1);
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    var int3 = 1;
    var int4 = comp(-1, 65535);
    while ((int3 <= int2)) {
        CC_CREATE(int0, 5, int3);
        int4 = enum_getvalue(0, 9, int1, int3);
        if ((int4 != comp(-1, 65535))) {
            IF_SETONOP(callback(script15814, -2147483645, -2147483644, int0), int4);
            IF_SETOP(1, enum_getvalue(9, 36, 16364, int4), int4);
        };
        int3 = (int3 + 1);
    };
    return;
}