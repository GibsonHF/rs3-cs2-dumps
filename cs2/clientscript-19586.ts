//
function script19586(int0: int): obj {
    if ((CC_FIND[1](comp(1313, 75), int0) == 1)) {
        if ((CC_GETINVOBJECT[1]() == 48447 as obj)) {
            return -1 as obj;
        };
        return CC_GETINVOBJECT[1]();
    };
    return INV_GETOBJ(963 as inv, int0);
}