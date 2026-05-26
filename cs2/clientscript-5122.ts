//
function script5122(int0: number, int1: number, int2: number, int3: number): void {
    if ((CC_FIND(int0, (int1 + 1)) == 1)) {
        CC_SETGRAPHIC(int2);
    };
    if ((CC_FIND(int0, (int1 + 2)) == 1)) {
        CC_SETCOLOUR(int3);
    };
    return;
}