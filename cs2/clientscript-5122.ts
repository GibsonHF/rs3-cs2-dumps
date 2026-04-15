//
function script5122(int0: component, int1: int, int2: graphic, int3: int): void {
    if ((CC_FIND(int0, (int1 + 1)) == 1)) {
        CC_SETGRAPHIC(int2);
    };
    if ((CC_FIND(int0, (int1 + 2)) == 1)) {
        CC_SETCOLOUR(int3);
    };
    return;
}