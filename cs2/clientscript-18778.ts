//
function script18778(int0: number, int1: number): number {
    if ((item_getparam(int0, 4338) != -1 as obj)) {
        var int0 = item_getparam(int0, 4338);
    };
    if ((int1 != 11748)) {
        return int0;
    };
    if (((OC_CATEGORY(INV_GETOBJ[1](94, 2)) == 4700) && (INV_GETVAR[1](94, 2, 47702) > 0))) {
        int0 = enum_getvalue(0, 33, 15970 as cs2enum, INV_GETVAR[1](94, 2, 47702));
    };
    return int0;
}