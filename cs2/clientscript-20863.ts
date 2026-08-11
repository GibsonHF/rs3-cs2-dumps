//
function script20863(int0: number, int1: number, int2: number): void {
    if ((MODULO(CLIENTCLOCK(), 50) != 0)) {
        return;
    };
    if ((CC_FINDBYCATEGORY(comp(1498, 2), int0, int1) == 1)) {  // marketplace_store:items_holder
        CC_SETTEXT(script20864(int2));
    };
    return;
}