//
function script8140(int0: int, int1: int, int2: int): [int, int] {
    var int3 = script10405(int0);
    if ((int3 == -1 as struct)) {
        return [-1, -1];
    };
    var int4 = 0;
    var int5 = 0;
    [int4, int5] = script8141(int0, int1, int2);
    if ((int3 != -1 as struct)) {
        if ((CC_FIND(struct_getparam(int3, 3505), 0) == 1)) {
            cc_setparam(3537, int1);
        };
        if ((CC_FIND(struct_getparam(int3, 3505), 1) == 1)) {
            cc_setparam(3537, int2);
        };
    };
    return [int4, int5];
}