//
function script16612(string0: string): void {
    if ((script13749() == true)) {
        CC_SETOP(1, "Information");
        CC_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 2));
    } else {
        CC_SETONMOUSEREPEAT(callback(script7774, string0, -2147483645, -2147483643, 2));
        CC_SETONMOUSELEAVE(callback(script16608));
    };
    return;
}