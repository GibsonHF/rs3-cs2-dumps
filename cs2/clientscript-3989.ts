//
function script3989(int0: number, int1: number): void {
    if ((int0 == -1)) {
        return;
    };
    var int2 = -1;
    var int3 = -1;
    if ((IF_FIND(int0) == 1)) {
        var [int1, int2, int3] = script13265(int1);
        if (((int2 != -1) && (int2 != int1))) {
            script14994(int1, -1, -1, int2, int3, 1);
        } else if (((int2 != -1) || (int1 != -1))) {
            script14994(int1, -1, -1, int2, int3, 0);
        } else {
            script14994(-1, -1, -1, -1, -1, 0);
            CC_SETONMOUSEREPEAT(callback());
        };
    };
    return;
}