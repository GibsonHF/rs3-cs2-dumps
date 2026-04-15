//
function script630(int0: int): void {
    if (((STOCKMARKET_ISOFFEREMPTY(int0, 0) == 0) && (CC_FIND(script623(int0), 0) == 1))) {
        CC_SETTRANS(230);
    };
    return;
}