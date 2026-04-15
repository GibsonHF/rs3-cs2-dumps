//
function script5062(int0: component, int1: int, int2: unknown_int): void {
    var int3 = (int1 * 12);
    if ((int2 == 1)) {
        if ((CC_FIND(int0, (int3 + 2)) == 1)) {
            CC_SETGRAPHIC(7552 as graphic);
        };
        if ((CC_FIND(int0, (int3 + 3)) == 1)) {
            CC_SETGRAPHIC(7551 as graphic);
        };
        if ((CC_FIND(int0, (int3 + 4)) == 1)) {
            CC_SETGRAPHIC(7553 as graphic);
        };
    } else {
        if ((CC_FIND(int0, (int3 + 2)) == 1)) {
            CC_SETGRAPHIC(7549 as graphic);
        };
        if ((CC_FIND(int0, (int3 + 3)) == 1)) {
            CC_SETGRAPHIC(7548 as graphic);
        };
        if ((CC_FIND(int0, (int3 + 4)) == 1)) {
            CC_SETGRAPHIC(7550 as graphic);
        };
    };
    return;
}