//
function script15155(int0: int, int1: obj): void {
    var string0 = `You can exchange bonds for : ${OC_NAME(int1)}.`;
    var string1 = `You have ${inttostring(int0, 10)} ${OC_NAME(int1)}.`;
    if ((script13749() == true)) {
        IF_SETOP(1, "View", comp(653, 76));
        IF_SETONOP(callback(script7774, string0, 42795082, -1, 0), 42795084);
        IF_SETOP(1, "View", 42795298);
        IF_SETONOP(callback(script7774, string1, 42795081, -1, 0), 42795298);
    } else {
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 42795084);
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), 42795298);
    };
    return;
}