//
function script3798(int0: component, int1: int): int {
    var int2 = int1;
    while ((CC_FIND(int0, int2) == 1)) {
        if (((CC_GETINVOBJECT() == -1 as obj) || (CC_GETINVCOUNT() <= 0))) {
            return int2;
        };
        int2 = (int2 + 1);
    };
    return -1;
}