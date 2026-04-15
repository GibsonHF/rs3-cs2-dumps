//
function script16463(int0: component, int1: int, int2: int): int {
    var int3 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 9, int3++);
    CC_SETPOSITION(int1, int2, 0, 0);
    CC_SETSIZE(0, 0, 0, 1);
    CC_SETCOLOUR(script10495(8));
    CC_CREATE(int0, 9, int3++);
    CC_SETPOSITION((int1 + 1), int2, 0, 0);
    CC_SETSIZE(0, 0, 0, 1);
    CC_SETCOLOUR(script10495(7));
    return ++int1;
}