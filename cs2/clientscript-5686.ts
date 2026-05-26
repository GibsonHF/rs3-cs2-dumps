//
function script5686(int0: number): number {
    var int1 = 0;
    var int2 = enum_getvalue(33, 0, 8547 as cs2enum, int0);
    if ((int2 <= 0)) {
        return 0;
    };
    if ((INV_GETOBJ(94, 13) == 30891)) {
        int1 = INV_GETVAR(94, 13, 21692);
        if ((int1 >= int2)) {
            return MAX(0, (int1 / int2));
        };
    };
    return 0;
}