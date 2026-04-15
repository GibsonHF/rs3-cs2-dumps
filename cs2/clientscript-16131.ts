//
function script16131(int0: int, int1: int, int2: int): void {
    if ((CC_FINDBYCATEGORY(comp(869, 3), int0, 7) == 1)) {
        CC_SETTEXT(`Amount purchased: <col=ffffff>${inttostring(int1, 10)}/${inttostring(int2, 10)}</col>`);
    };
    return;
}