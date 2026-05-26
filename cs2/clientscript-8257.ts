//
function script8257(int0: number, int1: number, int2: number): void {
    if ((int2 == -1)) {
        return;
    };
    var int3 = 0;
    var int4 = IF_GETNEXTSUBID(int2);
    var int5 = -1;
    while ((int3 < int4)) {
        if ((CC_FIND(int2, int3) == 1)) {
            int5 = script12590(cc_getparam(3540), int1, int0, cc_getparam(8099));
            if ((int5 != -1)) {
                CC_SETTRANS(int5);
            };
        };
        int3 = (int3 + 1);
    };
    return;
}