//
function script6571(int0: number, int1: number): void {
    if ((int0 == -1)) {
        return;
    };
    if ((int1 == -1)) {
        var int1 = 0;
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETGRAPHIC(11611);
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 1);
    CC_SETGRAPHIC(11612);
    CC_SETSIZE(20, 10, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 2);
    CC_SETGRAPHIC(11613);
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 3);
    CC_SETGRAPHIC(11614);
    CC_SETSIZE(10, 20, 0, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 4);
    CC_SETGRAPHIC(11615);
    CC_SETSIZE(20, 20, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 5);
    CC_SETGRAPHIC(11616);
    CC_SETSIZE(10, 20, 0, 1);
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 6);
    CC_SETGRAPHIC(11617);
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 7);
    CC_SETGRAPHIC(11618);
    CC_SETSIZE(20, 10, 1, 0);
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 8);
    CC_SETGRAPHIC(11619);
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETCOLOUR(int1);
    return;
}