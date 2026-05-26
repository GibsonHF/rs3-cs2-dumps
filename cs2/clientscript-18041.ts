//
function script18041(int0: number, int1: number, int2: number): void {
    if ((CC_FINDBYCATEGORY(int0, 2, int1) == 1)) {
        CC_DELETEALLNESTED();
        if ((CC_GETDYNAMICLAYER() == 1)) {
            CC_SETSIZE(int2, 0, 0, 1);
        };
    };
    return;
}