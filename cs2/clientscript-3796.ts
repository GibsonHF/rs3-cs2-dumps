//
function script3796(int0: number, int1: number, int2: number): number {
    if (((int0 == -1) || (int1 == -1))) {
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