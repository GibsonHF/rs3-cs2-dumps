//
function script14345(int0: number): number {
    if ((CC_FIND[1](comp(517, 201), int0) == 1)) {  // bank:bank_inv
        return CC_GETINVCOUNT[1]();
    };
    return INV_GETNUM(95 as inv, int0);
}