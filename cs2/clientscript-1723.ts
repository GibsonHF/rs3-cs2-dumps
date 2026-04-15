//
function script1723(int0: component, int1: int, int2: graphic, int3: int): void {
    if ((CLIENTCLOCK() < int3)) {
        return;
    };
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        CC_SETGRAPHIC(int2);
        CC_SETONTIMER(callback());
    };
    return;
}