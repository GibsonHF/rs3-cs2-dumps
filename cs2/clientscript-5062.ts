//
function script5062(int0: number, int1: number, int2: number): void {
    var int3 = (int1 * 12);
    if ((int2 == 1)) {
        if ((CC_FIND(int0, (int3 + 2)) == 1)) {
            CC_SETGRAPHIC(7552);
        };
        if ((CC_FIND(int0, (int3 + 3)) == 1)) {
            CC_SETGRAPHIC(7551);
        };
        if ((CC_FIND(int0, (int3 + 4)) == 1)) {
            CC_SETGRAPHIC(7553);
        };
    } else {
        if ((CC_FIND(int0, (int3 + 2)) == 1)) {
            CC_SETGRAPHIC(7549);
        };
        if ((CC_FIND(int0, (int3 + 3)) == 1)) {
            CC_SETGRAPHIC(7548);
        };
        if ((CC_FIND(int0, (int3 + 4)) == 1)) {
            CC_SETGRAPHIC(7550);
        };
    };
    return;
}