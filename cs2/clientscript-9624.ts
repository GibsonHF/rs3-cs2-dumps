//
function script9624(int0: component, int1: int, int2: int): void {
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int0, 0) == 1))) {
        CC_SETCOLOUR(int2);
        CC_SETHIDE[1](true);
    };
    return;
}