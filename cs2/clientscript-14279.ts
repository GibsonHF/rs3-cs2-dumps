//
function script14279(): void {
    var int0 = enum_getvalue(0, 26, 14121 as cs2enum, varplayer_7993);
    var int1 = -1 as struct;
    var int2 = true;
    if ((int0 != -1 as cs2enum)) {
        int1 = enum_getvalue(0, 73, int0, varplayer_7992);
        if (((int1 != -1 as struct) && (struct_getparam(int1, 6000) < 1))) {
            int2 = false;
        };
    };
    script13971(comp(1011, 2), comp(1011, 3), 28553 as struct, "1", script6428(-1, varplayer_7992));
    script13971(comp(1011, 5), comp(1011, 39), 28553 as struct, "10", int2);
    script13971(comp(1011, 7), comp(1011, 40), 28553 as struct, "100", int2);
    script13971(comp(1011, 9), comp(1011, 41), 28553 as struct, "All", int2);
    return;
}