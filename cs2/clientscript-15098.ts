//
function script15098(int0: obj, int1: struct): obj {
    if ((item_getparam(int0, 4338) != -1 as obj)) {
        var int0 = item_getparam(int0, 4338);
    };
    if ((int1 != 11748 as struct)) {
        return int0;
    };
    if (((OC_CATEGORY(INV_GETOBJ(94 as inv, 2)) == 4700 as category) && (INV_GETVAR(94 as inv, 2, 47702) > 0))) {
        int0 = enum_getvalue(0, 33, 15970 as cs2enum, INV_GETVAR(94 as inv, 2, 47702));
    };
    return int0;
}