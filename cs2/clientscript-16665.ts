//
function script16665(int0: unknown_int, int1: int, string0: string): void {
    if ((script13749() == true)) {
        CC_SETOP(1, "Information");
        CC_SETONOP(callback(script7774, string0, int0, int1, 2));
    } else {
        CC_SETONMOUSEREPEAT(callback(script7774, string0, int0, int1, 2));
        CC_SETONMOUSELEAVE(callback(script16608));
    };
    return;
}