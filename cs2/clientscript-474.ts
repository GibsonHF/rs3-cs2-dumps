//
function script474(int0: obj, int1: unknown_int): string {
    var int2 = false;
    var string0 = "";
    var int3 = 0;
    var int4 = 0;
    [int3, int2, string0, int4] = script477(int1);
    if ((int3 == 0)) {
        return "";
    };
    if (((enum_getvalue(0, 1, 12137 as cs2enum, int3) == true) || ((int4 == 1) && (enum_getvalue(0, 1, 15778 as cs2enum, int3) == true)))) {
        return string0;
    };
    if ((((int3 == 31) && (item_getparam(int0, 6295) == 1)) && (item_getparam(int0, 6717) != -1 as obj))) {
        return enum_getvalue(0, 36, 108 as cs2enum, int3);
    };
    return "";
}