//
function script6571(int0: component, int1: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    if ((int1 == -1)) {
        var int1 = 0;
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETGRAPHIC(11611 as graphic);
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 1);
    CC_SETGRAPHIC(11612 as graphic);
    CC_SETSIZE(20, 10, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 2);
    CC_SETGRAPHIC(11613 as graphic);
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 3);
    CC_SETGRAPHIC(11614 as graphic);
    CC_SETSIZE(10, 20, 0, 1);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 4);
    CC_SETGRAPHIC(11615 as graphic);
    CC_SETSIZE(20, 20, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 5);
    CC_SETGRAPHIC(11616 as graphic);
    CC_SETSIZE(10, 20, 0, 1);
    CC_SETPOSITION(0, 0, 2, 1);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 6);
    CC_SETGRAPHIC(11617 as graphic);
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 0, 2);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 7);
    CC_SETGRAPHIC(11618 as graphic);
    CC_SETSIZE(20, 10, 1, 0);
    CC_SETPOSITION(0, 0, 1, 2);
    CC_SETCOLOUR(int1);
    CC_CREATE(int0, 5, 8);
    CC_SETGRAPHIC(11619 as graphic);
    CC_SETSIZE(10, 10, 0, 0);
    CC_SETPOSITION(0, 0, 2, 2);
    CC_SETCOLOUR(int1);
    return;
}