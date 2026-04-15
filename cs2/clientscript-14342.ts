//
function script14342(int0: obj, int1: int, int2: unknown_int): int {
    var int3 = script14337();
    while ((int1 < int3)) {
        if ((((CC_FIND(comp(517, 201), int1) == 1) && (CC_GETINVOBJECT() == int0)) && ((CC_GETINVCOUNT() > 0) || (int2 == 1)))) {
            return int1;
        };
        var int1 = (int1 + 1);
    };
    return -1;
}