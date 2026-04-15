//
function script9964(int0: struct): obj {
    if ((int0 == -1 as struct)) {
        return -1 as obj;
    };
    var int1 = struct_getparam(int0, 4397);
    if (((int1 < 0) || (int1 >= INV_SIZE(675 as inv)))) {
        return -1 as obj;
    };
    return INV_GETOBJ(675 as inv, int1);
}