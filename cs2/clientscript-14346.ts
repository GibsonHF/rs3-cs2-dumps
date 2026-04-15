//
function script14346(int0: inv, int1: int): obj {
    var int2 = script14074(int0);
    if ((CC_FIND[1](int2, int1) == 1)) {
        return CC_GETINVOBJECT[1]();
    };
    return INV_GETOBJ(int0, int1);
}