//
function script6591(int0: number): void {
    var int1 = 0;
    var int2 = -1;
    if ((CC_FIND(96665603, int0) == 1)) {
        int1 = (1 - cc_getparam(7194));
        cc_setparam(7194, int1);
        script7889(1, 1, script734(int1));
        int2 = cc_getparam(7195);
    };
    script20517(int2);
    script8393(int2, int1);
    return;
}