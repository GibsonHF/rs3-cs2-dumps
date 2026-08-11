//
function script14289(int0: number, int1: number, int2: number): number {
    if ((((CC_FIND(comp(517, 201), int2) == 1) && (CC_GETINVOBJECT() == int0)) && (CC_GETINVCOUNT() == int1))) {  // bank:bank_inv
        script13796(-1, 0);
        script9324(1);
        return 1;
    };
    return 0;
}