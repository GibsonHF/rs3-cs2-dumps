//
function script1723(int0: number, int1: number, int2: number, int3: number): void {
    if ((CLIENTCLOCK() < int3)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(int2);
        CC_SETONTIMER(callback());
    } else if (((int1 == -1) && (IF_FIND(int0) == 1))) {
        CC_SETGRAPHIC(int2);
        CC_SETONTIMER(callback());
    };
    return;
}