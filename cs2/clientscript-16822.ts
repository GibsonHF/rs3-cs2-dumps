//
function script16822(int0: obj, int1: inv, int2: int, int3: int): unknown_int {
    if (((INV_GETOBJ(int1, int2) != int0) || (INV_GETNUM(int1, int2) == 0))) {
        return 0;
    };
    if ((OC_HASVAROBJ(int0) == 0)) {
        return 0;
    };
    var int4 = INV_GETVAR(int1, int2, 30215);
    var int5 = INV_GETVAR(int1, int2, 30217);
    var int6 = INV_GETVAR(int1, int2, 30219);
    var int7 = INV_GETVAR(int1, int2, 30221);
    if (((((int4 == int3) || (int5 == int3)) || (int6 == int3)) || (int7 == int3))) {
        return 1;
    };
    return 0;
}