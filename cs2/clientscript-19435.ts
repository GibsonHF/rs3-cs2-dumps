//
function script19435(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((CC_FINDBYCATEGORY(int0, int1, int2) == 1)) {
        CC_SETGRAPHIC(int3);
    };
    if ((CC_FINDBYCATEGORY(int0, int1, (int2 + 1)) == 1)) {
        CC_SETCOLOUR(script10495(2));
    };
    return;
}