//
function script7143(int0: int, int1: graphic): void {
    var int2 = 1;
    while ((CC_FIND(comp(1371, 22), int2) == 1)) {
        CC_SETGRAPHIC(-1 as graphic);
        int2 = (int2 + 4);
    };
    if ((CC_FIND(comp(1371, 22), int0) == 1)) {
        CC_SETGRAPHIC(int1);
    };
    return;
}