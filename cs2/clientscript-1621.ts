//
function script1621(int0: component, int1: int, int2: int, int3: int): void {
    if ((CLIENTCLOCK() < int3)) {
        return;
    };
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        CC_SETTRANS(int2);
        CC_SETONTIMER(callback());
    };
    return;
}