//
function script19499(int0: number, int1: number): void {
    var int2 = -1;
    if ((CC_FIND(86048843, int1) == 1)) {
        int2 = CC_GETINVOBJECT();
    } else {
        int2 = INV_GETOBJ(963, int1);
    };
    script19619(int2, int1);
    return;
}