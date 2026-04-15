//
function script19434(int0: component, int1: int, int2: int, int3: unknown_int, int4: graphic): void {
    if ((CC_FINDBYCATEGORY(int0, int1, int2) == 1)) {
        CC_SETGRAPHIC(int4);
    };
    if ((CC_FINDBYCATEGORY(int0, int1, (int2 + 1)) == 1)) {
        CC_SETCOLOUR(script10495(1));
    };
    return;
}