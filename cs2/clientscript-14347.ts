//
function script14347(int0: inv, int1: int): int {
    var int2 = script14074(int0);
    if ((CC_FIND[1](int2, int1) == 1)) {
        return CC_GETINVCOUNT[1]();
    };
    return INV_GETNUM(int0, int1);
}