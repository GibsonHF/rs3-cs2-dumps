//
function script14279(): void {
    var int0 = enum_getvalue(0, 26, 14121 as cs2enum, varplayer_7993);
    var int1 = -1 as struct;
    var int2 = 1;
    if ((int0 != -1 as cs2enum)) {
        int1 = enum_getvalue(0, 73, int0, varplayer_7992);
        if (((int1 != -1 as struct) && (struct_getparam(int1, 6000) < 1))) {
            int2 = 0;
        };
    };
    script13971(66256898, 66256899, 28553, "1", script6428(-1, varplayer_7992));
    script13971(66256901, 66256935, 28553, "10", int2);
    script13971(66256903, 66256936, 28553, "100", int2);
    script13971(66256905, 66256937, 28553, "All", int2);
    return;
}