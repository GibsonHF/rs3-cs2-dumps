//
function script19584(int0: number, int1: number, int2: number): number {
    var int3 = script19579();
    while ((int1 < int3)) {
        if ((((CC_FIND(86048843, int1) == 1) && (CC_GETINVOBJECT() == int0)) && ((CC_GETINVCOUNT() > 0) || (int2 == 1)))) {
            return int1;
        };
        var int1 = (int1 + 1);
    };
    return -1;
}