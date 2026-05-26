//
function script16243(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    CC_SETOP(1, "Examine");
    if ((script13749() == 1)) {
        CC_SETONOP(callback(script4608, int0, int1, int2, int3, int4, int5));
    } else {
        CC_SETONOP(callback(script12868, script14456(int2)));
    };
    return;
}