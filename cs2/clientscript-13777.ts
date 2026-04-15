//
function script13777(int0: component, int1: int, int2: int, int3: int, int4: obj, int5: int): int {
    if (((int1 > 0) && (CC_FIND(int0, (int1 - 1)) == 1))) {
        var int3 = (CC_GETY() + CC_GETHEIGHT());
    };
    CC_CREATE(int0, 5, int1++);
    CC_SETSIZE(36, 32, 0, 0);
    CC_SETPOSITION((int2 - 9), int3, 1, 0);
    CC_SETOBJECT_ALWAYSNUM(int4, int5);
    return int1;
}