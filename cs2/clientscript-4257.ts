//
function script4257(int0: component): void {
    if ((IF_FIND(int0) == 1)) {
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETSIZE(16, 15, 0, 0);
        CC_SETGRAPHIC(5450 as graphic);
        CC_SETONOP(callback(script29));
        CC_SETOP(1, "Close");
    };
    return;
}