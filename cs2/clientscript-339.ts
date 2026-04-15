//
function script339(int0: struct, int1: int): int {
    if (((INV_GETOBJ(94 as inv, 3) == 24203 as obj) || (INV_GETOBJ(94 as inv, 3) == 24200 as obj))) {
        if ((varclient_1912 != int1)) {
            return 0;
        };
        if ((varclient_1913 != struct_getparam(int0, 2975))) {
            return 0;
        };
        return varclient_1914;
    };
    return 0;
}