//
function script7603(int0: struct): obj {
    if ((int0 == -1 as struct)) {
        return -1 as obj;
    };
    var int1 = enum_getvalue(73, 0, 7366 as cs2enum, int0);
    if ((int1 == -1)) {
        return -1 as obj;
    };
    return INV_GETOBJ(686 as inv, int1);
}