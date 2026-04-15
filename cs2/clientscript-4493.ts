//
function script4493(int0: component, int1: int): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    if ((CC_FIND(int0, int1) == 1)) {
        int2 = cc_getparam(7188);
        int4 = cc_getparam(7187);
        if (((int4 == 1) || (int4 == 3))) {
            int3 = script4497((int1 / 3), 0, 0);
        } else {
            script4494(int0, int1);
            int3 = 1;
        };
    };
    return;
}