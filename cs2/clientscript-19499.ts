//
function script19499(int0: unknown_int, int1: int): void {
    var int2 = -1 as obj;
    if ((CC_FIND(comp(1313, 75), int1) == 1)) {
        int2 = CC_GETINVOBJECT();
    } else {
        int2 = INV_GETOBJ(963 as inv, int1);
    };
    script19619(int2, int1);
    return;
}