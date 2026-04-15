//
function script205(): void {
    var int0 = 0;
    var int1 = 1;
    var int2 = enum_getvalue(0, 39, 1079 as cs2enum, 0);
    var int3 = -1 as obj;
    var int4 = -1 as obj;
    while (((int0 < 8) && (int1 == 1))) {
        int2 = enum_getvalue(0, 39, 1079 as cs2enum, int0);
        int3 = INV_GETOBJ(int2, 0);
        int4 = INV_GETOBJ(int2, 1);
        [int3, int4] = script17386(int3, int4, INV_GETOBJ(int2, 2));
        if (((int3 != -1 as obj) || (int4 != -1 as obj))) {
            int1 = 0;
        };
        int0 = (int0 + 1);
    };
    if ((int1 == 1)) {
        IF_SETHIDE(false, comp(651, 15));
        IF_SETHIDE(false, comp(651, 7));
        IF_SETONVARTRANSMIT(callback(), comp(651, 17));
        IF_SETONVARTRANSMIT(callback(), 42663945);
        IF_SETCOLOUR(struct_getparam(24101, 4523), 42663953);
        IF_SETCOLOUR(struct_getparam(24095, 4523), 42663945);
    } else {
        IF_SETHIDE(true, comp(651, 15));
        IF_SETHIDE(true, comp(651, 7));
        script7689(comp(651, 17), 24101 as struct);
        script7689(comp(651, 9), 24095 as struct);
    };
    return;
}