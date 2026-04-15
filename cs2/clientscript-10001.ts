//
function script10001(int0: component, int1: int, int2: unknown_int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETONTIMER(callback(script4411, int0, int1, int2, 0));
    };
    return;
}