//
function script12187(int0: component, int1: int): void {
    var int2 = -1 as dbrow;
    if ((CC_FIND(int0, int1) == 1)) {
        int2 = cc_getparam(5529);
        if ((int2 == -1 as dbrow)) {
            return;
        };
        script8800(dbrow_getfield(int2, 16400, 0), int0, int1);
    };
    return;
}