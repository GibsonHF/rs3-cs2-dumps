//
function script12785(int0: inv, int1: int, int2: obj): int {
    if ((MAP_MEMBERS() == 0)) {
        return 0;
    };
    var int3 = INV_GETOBJ(int0, int1);
    if ((int1 < 0)) {
        return 0;
    };
    if ((((int3 == -1 as obj) || (OC_CATEGORY(int3) != 3983 as category)) || (item_getparam(int3, 7596) == 0))) {
        return 0;
    };
    var int4 = enum_getvalue(33, 0, 11664 as cs2enum, int2);
    var int5 = INV_GETVAR(int0, int1, 33777);
    var int6 = INV_GETVAR(int0, int1, 33778);
    var int7 = INV_GETVAR(int0, int1, 33779);
    var int8 = INV_GETVAR(int0, int1, 21605);
    if (((INV_GETVAR(int0, int1, 33774) == int4) && (int5 > 0))) {
        return int5;
    };
    if (((INV_GETVAR(int0, int1, 33775) == int4) && (int6 > 0))) {
        return int6;
    };
    if (((INV_GETVAR(int0, int1, 33776) == int4) && (int7 > 0))) {
        return int7;
    };
    if (((INV_GETVAR(int0, int1, 21604) == int4) && (int8 > 0))) {
        return int8;
    };
    return 0;
}