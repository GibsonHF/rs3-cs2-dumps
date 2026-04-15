//
function script14353(int0: int, int1: int): int {
    var int2 = int0;
    while ((int2 < int1)) {
        if (((CC_FIND(comp(517, 201), int2) == 1) && (CC_GETINVOBJECT() == 48447 as obj))) {
            return int2;
        };
        int2 = (int2 + 1);
    };
    return -1;
}