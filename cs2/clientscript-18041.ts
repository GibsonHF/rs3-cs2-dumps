//
function script18041(int0: component, int1: int, int2: int): void {
    if ((CC_FINDBYCATEGORY(int0, 2, int1) == 1)) {
        CC_DELETEALLNESTED();
        if ((CC_GETDYNAMICLAYER() == 1)) {
            CC_SETSIZE(int2, 0, 0, 1);
        };
    };
    return;
}