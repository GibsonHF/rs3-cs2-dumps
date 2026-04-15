//
function script14293(int0: int, int1: int): int {
    var int2 = 0;
    while ((int0 < int1)) {
        if (((CC_FIND(comp(517, 201), int0) == 1) && (CC_GETINVOBJECT() == 48447 as obj))) {
            int2 = (int2 + 1);
        };
        var int0 = (int0 + 1);
    };
    return int2;
}