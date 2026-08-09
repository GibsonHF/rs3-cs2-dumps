//
function script13777(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): number {
    if (((int1 > 0) && (CC_FIND(int0, (int1 - 1)) == 1))) {
        var int3 = (CC_GETY() + CC_GETHEIGHT());
    };
    stack(int0);
    stack(5);
    stack(int1);
    var int1 = (int1 + 1);
    CC_CREATE();
    CC_SETSIZE(36, 32, 0, 0);
    CC_SETPOSITION((int2 - 9), int3, 1, 0);
    CC_SETOBJECT_ALWAYSNUM(int4, int5);
    return int1;
}