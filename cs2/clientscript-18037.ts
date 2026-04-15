//
function script18037(int0: int, int1: int): void {
    var int2 = 0;
    int2 = SETBIT_RANGE_TOINT(int2, int0, 0, 7);
    int2 = SETBIT_RANGE_TOINT(int2, int1, 8, 11);
    if ((CC_FINDBYCATEGORY(comp(1227, 40), 0, int2) == 1)) {
        CC_TRIGGEROP(1);
    };
    return;
}