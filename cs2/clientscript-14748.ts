//
function script14748(int0: component, int1: int, int2: int): int {
    var int3 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 9, int3++);
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETSIZE(0, 0, 1, 0);
    CC_SETCOLOUR(script10495(8));
    CC_CREATE(int0, 9, int3++);
    CC_SETPOSITION(int1, (int2 + 1), 0, 0);
    CC_SETSIZE(0, 0, 1, 0);
    CC_SETCOLOUR(script10495(7));
    var int2 = (int2 + (2 + (2 * 2)));
    return int2;
}