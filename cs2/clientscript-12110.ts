//
function script12110(int0: number, int1: number, string0: string): void {
    if ((int1 == -1)) {
        IF_SETONMOUSEREPEAT(callback(script8799, string0, int0, int1), int0);
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, int0, int1));
    };
    return;
}