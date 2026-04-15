//
function script186(): void {
    var int0 = 0;
    var int1 = 1;
    var int2 = enum_getvalue(0, 39, 1079 as cs2enum, 0);
    var int3 = -1 as obj;
    var int4 = -1 as obj;
    while (((int0 < 8) && (int1 == 1))) {
        int2 = enum_getvalue(0, 39, 1079 as cs2enum, int0);
        [int3, int4] = script17386(INV_GETOBJ(int2, 0), INV_GETOBJ(int2, 1), INV_GETOBJ(int2, 2));
        if (((int3 != -1 as obj) || (int4 != -1 as obj))) {
            int1 = 0;
        };
        int0 = (int0 + 1);
    };
    IF_SETHIDE(true, comp(109, 48));
    IF_SETHIDE(true, comp(109, 56));
    if ((int1 == 1)) {
        IF_SETHIDE(false, comp(109, 48));
        IF_SETHIDE(false, comp(109, 56));
    };
    return;
}