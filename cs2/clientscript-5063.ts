//
function script5063(int0: number, int1: number, int2: number): void {
    var int3 = (int1 * 12);
    if ((int2 == 1)) {
        if ((CC_FIND(int0, (int3 + 5)) == 1)) {
            CC_SETGRAPHIC(7552);
        };
        if ((CC_FIND(int0, (int3 + 6)) == 1)) {
            CC_SETGRAPHIC(7551);
        };
        if ((CC_FIND(int0, (int3 + 7)) == 1)) {
            CC_SETGRAPHIC(7553);
        };
    } else {
        if ((CC_FIND(int0, (int3 + 5)) == 1)) {
            CC_SETGRAPHIC(7549);
        };
        if ((CC_FIND(int0, (int3 + 6)) == 1)) {
            CC_SETGRAPHIC(7548);
        };
        if ((CC_FIND(int0, (int3 + 7)) == 1)) {
            CC_SETGRAPHIC(7550);
        };
    };
    if ((CC_FIND(int0, (int3 + 10)) == 1)) {
        CC_SETGRAPHIC(7409);
    };
    return;
}