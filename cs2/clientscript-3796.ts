//
function script3796(int0: component, int1: obj, int2: int): int {
    if (((int0 == comp(-1, 65535)) || (int1 == -1 as obj))) {
        return -1;
    };
    var int3 = int2;
    while ((CC_FIND(int0, int3) == 1)) {
        if (((CC_GETINVOBJECT() == int1) && (CC_GETINVCOUNT() > 0))) {
            return int3;
        };
        int3 = (int3 + 1);
    };
    return -1;
}