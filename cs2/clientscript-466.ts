//
function script466(): unknown_int {
    var int0 = INV_GETOBJ(94 as inv, 3);
    var int1 = -1 as obj;
    var int2 = -1;
    if (((OC_CATEGORY(INV_GETOBJ(94 as inv, 2)) == 4700 as category) && (item_getparam(INV_GETOBJ(94 as inv, 2), 3793) == 0))) {
        int2 = INV_GETVAR(94 as inv, 2, 47702);
        if ((int2 > 0)) {
            int1 = enum_getvalue(0, 33, 15970 as cs2enum, int2);
            if ((((item_getparam(int0, 2825) == 1) && (item_getparam(int1, 2825) == 1)) || (((item_getparam(int0, 2827) == 1) && (item_getparam(int1, 2827) == 1)) || (((item_getparam(int0, 2826) == 1) && (item_getparam(int1, 2826) == 1)) || ((item_getparam(int0, 8898) == 1) && (item_getparam(int1, 8898) == 1)))))) {
                return 1;
            };
        };
    };
    return 0;
}