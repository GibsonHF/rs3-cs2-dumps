//
function script14342(int0: number, int1: number, int2: number): number {
    var int3 = script14337();
    while ((int1 < int3)) {
        if ((((CC_FIND(33882313, int1) == 1) && (CC_GETINVOBJECT() == int0)) && ((CC_GETINVCOUNT() > 0) || (int2 == 1)))) {
            return int1;
        };
        var int1 = (int1 + 1);
    };
    return -1;
}