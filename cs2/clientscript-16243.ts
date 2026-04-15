//
function script16243(int0: struct, int1: graphic, int2: obj, int3: int, int4: int, int5: int): void {
    CC_SETOP(1, "Examine");
    if ((script13749() == true)) {
        CC_SETONOP(callback(script4608, int0, int1, int2, int3, int4, int5));
    } else {
        CC_SETONOP(callback(script12868, script14456(int2)));
    };
    return;
}