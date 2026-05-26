//
function script19588(int0: number, int1: number): number {
    var int2 = script19567(int0);
    if ((CC_FIND[1](int2, int1) == 1)) {
        return CC_GETINVOBJECT[1]();
    };
    return INV_GETOBJ(int0, int1);
}