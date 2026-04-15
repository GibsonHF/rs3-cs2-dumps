//
function script11678(int0: component, int1: inv, int2: obj, int3: int): int {
    if ((int1 == -1 as inv)) {
        return -1;
    };
    var int4 = INV_SIZE(int1);
    var int5 = int3;
    while ((int3 < int4)) {
        if (((CC_FIND(int0, int3) == 1) && (CC_GETINVOBJECT() == int2))) {
            return int3;
        };
        var int3 = (int3 + 1);
    };
    return script9251(int1, int2, int5);
}