//
function script16670(): void {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = CC_GETGRAPHICDIMENSIONS();
    CC_SETASPECT(int0, int1);
    if ((int0 > int1)) {
        CC_SETSIZE(70, 1, 0, 4);
    } else {
        CC_SETSIZE(1, 70, 4, 0);
    };
    return;
}