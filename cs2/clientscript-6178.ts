//
function script6178(int0: int, int1: component): int {
    CC_CREATE(int1, 5, int0);
    CC_SETGRAPHIC(10711 as graphic);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(277, 125, 0, 0);
    var int0 = (int0 + 1);
    CC_CREATE(int1, 5, int0);
    CC_SETGRAPHIC(10712 as graphic);
    CC_SETPOSITION(0, 0, 2, 0);
    CC_SETSIZE(278, 125, 0, 0);
    int0 = (int0 + 1);
    CC_CREATE(int1, 5, int0);
    CC_SETGRAPHIC(10713 as graphic);
    CC_SETPOSITION(0, 125, 0, 0);
    CC_SETSIZE(277, 125, 0, 0);
    int0 = (int0 + 1);
    CC_CREATE(int1, 5, int0);
    CC_SETGRAPHIC(10714 as graphic);
    CC_SETPOSITION(0, 125, 2, 0);
    CC_SETSIZE(278, 125, 0, 0);
    int0 = (int0 + 1);
    CC_CREATE(int1, 5, int0);
    CC_SETGRAPHIC(10715 as graphic);
    CC_SETPOSITION(0, 250, 0, 0);
    CC_SETSIZE(277, 125, 0, 0);
    int0 = (int0 + 1);
    CC_CREATE(int1, 5, int0);
    CC_SETGRAPHIC(10716 as graphic);
    CC_SETPOSITION(0, 250, 2, 0);
    CC_SETSIZE(278, 125, 0, 0);
    return ++int0;
}