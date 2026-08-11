//
function script14340(int0: number, int1: number, int2: number): number {
    while ((int1 < int2)) {
        if ((((CC_FIND(comp(517, 201), int1) == 1) && (CC_GETINVOBJECT() == int0)) && (CC_GETINVCOUNT() == 0))) {  // bank:bank_inv
            return int1;
        };
        var int1 = (int1 + 1);
    };
    return -1;
}