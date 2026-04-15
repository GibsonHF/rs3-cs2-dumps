//
function script12571(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = 0;
    while ((int1 < 6)) {
        CC_CREATE(int0, 5, int1++);
        CC_SETGRAPHIC(22984 as graphic);
        CC_SETSIZE(91, 82, 0, 0);
        CC_SETPOSITION((CC_GETWIDTH() * (int1 - 2)), 0, 0, 4);
    };
    return;
}