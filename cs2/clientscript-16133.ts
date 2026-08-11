//
function script16133(int0: number, int1: number, string0: string): void {
    var string1 = script16134(int1);
    if ((CC_FINDBYCATEGORY(comp(869, 3), int0, 8) == 1)) {  // pof_advertisement_noticeboard:grid
        CC_SETTEXT(`${string1} <col=ffffff>${string0}</col>`);
    };
    return;
}