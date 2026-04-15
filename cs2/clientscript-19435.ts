//
function script19435(int0: component, int1: int, int2: int, int3: graphic, int4: unknown_int): void {
    if ((CC_FINDBYCATEGORY(int0, int1, int2) == 1)) {
        CC_SETGRAPHIC(int3);
    };
    if ((CC_FINDBYCATEGORY(int0, int1, (int2 + 1)) == 1)) {
        CC_SETCOLOUR(script10495(2));
    };
    return;
}