//
function script19582(int0: obj, int1: int, int2: int): int {
    while ((int1 < int2)) {
        if ((((CC_FIND(comp(1313, 75), int1) == 1) && (CC_GETINVOBJECT() == int0)) && (CC_GETINVCOUNT() == 0))) {
            return int1;
        };
        var int1 = (int1 + 1);
    };
    return -1;
}