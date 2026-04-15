//
function script15097(int0: inv, int1: int): string {
    var int2 = 0;
    var int3 = -1 as obj;
    if (((OC_CATEGORY(INV_GETOBJ(int0, int1)) == 4700 as category) && (OC_HASVAROBJ(INV_GETOBJ(int0, int1)) == 1))) {
        int2 = INV_GETVAR(int0, int1, 47702);
        if ((int2 > 0)) {
            int3 = enum_getvalue(0, 33, 15970 as cs2enum, int2);
            if ((item_getparam(int3, 4338) != -1 as obj)) {
                int3 = item_getparam(int3, 4338);
            };
            return `${script17461(int3)} (${OC_NAME(int3)})`;
        };
    };
    return "None";
}