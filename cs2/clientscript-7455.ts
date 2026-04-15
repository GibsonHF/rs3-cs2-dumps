//
function script7455(int0: inv, int1: int): unknown_int {
    var int2 = INV_GETOBJ(int0, int1);
    if ((((int2 != -1 as obj) && (item_getparam(int2, 5524) == 1)) && ((((INV_GETVAR(int0, int1, 30215) == 65) || (INV_GETVAR(int0, int1, 30217) == 65)) || (INV_GETVAR(int0, int1, 30219) == 65)) || (INV_GETVAR(int0, int1, 30221) == 65)))) {
        return 1;
    };
    return 0;
}