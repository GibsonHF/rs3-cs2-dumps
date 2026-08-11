//
function script16131(int0: number, int1: number, int2: number): void {
    if ((CC_FINDBYCATEGORY(comp(869, 3), int0, 7) == 1)) {  // pof_advertisement_noticeboard:grid
        CC_SETTEXT(`Amount purchased: <col=ffffff>${inttostring(int1, 10)}/${inttostring(int2, 10)}</col>`);
    };
    return;
}