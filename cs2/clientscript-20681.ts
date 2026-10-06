//
function script20681(int0: number, int1: number): [number, number, number, string] {
    if ((MODULO(CLIENTCLOCK(), 50) != 0)) {
        return;
    };
    if ((CC_FINDBYCATEGORY(comp(1498, 2), int0, int1) == 1)) {  // marketplace_store:items_holder
        stack(int2);
        stack(string0);
        CC_SETTEXT(script20682(string1));
    };
    return;
}