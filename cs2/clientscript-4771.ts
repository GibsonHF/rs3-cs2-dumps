//
function script4771(int0: component, int1: int): int {
    var int2 = 38;
    var int3 = (int1 / 8);
    var int4 = 5470;
    CC_CREATE(int0, 3, int1);
    CC_SETPOSITION(2, (int2 * int3), 0, 0);
    CC_SETSIZE(4, 10, 1, 0);
    if ((MODULO(int3, 2) == 0)) {
        CC_SETCOLOUR(1578773);
    } else {
        CC_SETCOLOUR(2170652);
    };
    CC_SETFILL(1);
    var int5 = (int1 + 1);
    CC_SETONMOUSEOVER(callback(script4779, int0, int5, 1));
    CC_SETONMOUSELEAVE(callback(script4779, int0, int5, 0));
    var int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(int4);
    CC_SETSIZE(4, 10, 1, 0);
    CC_SETPOSITION(2, (int2 * int3), 0, 0);
    CC_SETHIDE(1);
    return ++int1;
}