//
function script5063(int0: component, int1: int, int2: unknown_int): void {
    var int3 = (int1 * 12);
    if ((int2 == 1)) {
        if ((CC_FIND(int0, (int3 + 5)) == 1)) {
            CC_SETGRAPHIC(7552 as graphic);
        };
        if ((CC_FIND(int0, (int3 + 6)) == 1)) {
            CC_SETGRAPHIC(7551 as graphic);
        };
        if ((CC_FIND(int0, (int3 + 7)) == 1)) {
            CC_SETGRAPHIC(7553 as graphic);
        };
    } else {
        if ((CC_FIND(int0, (int3 + 5)) == 1)) {
            CC_SETGRAPHIC(7549 as graphic);
        };
        if ((CC_FIND(int0, (int3 + 6)) == 1)) {
            CC_SETGRAPHIC(7548 as graphic);
        };
        if ((CC_FIND(int0, (int3 + 7)) == 1)) {
            CC_SETGRAPHIC(7550 as graphic);
        };
    };
    if ((CC_FIND(int0, (int3 + 10)) == 1)) {
        CC_SETGRAPHIC(7409 as graphic);
    };
    return;
}