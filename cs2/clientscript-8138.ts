//
function script8138(int0: int): [int, int] {
    var int1 = script10405(int0);
    if ((int1 == -1 as struct)) {
        return [-1, -1];
    };
    var int2 = struct_getparam(int1, 3505);
    if ((int2 == comp(-1, 65535))) {
        return [-1, -1];
    };
    var int3 = 0;
    var int4 = 0;
    if ((CC_FIND(int2, 0) == 1)) {
        int3 = cc_getparam(3537);
    } else {
        return [-1, -1];
    };
    if ((CC_FIND(int2, 1) == 1)) {
        int4 = cc_getparam(3537);
    } else {
        return [-1, -1];
    };
    return [int3, int4];
}