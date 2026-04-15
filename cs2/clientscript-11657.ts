//
function script11657(int0: graphic): graphic {
    var int1 = -1 as cs2enum;
    var int2 = int0;
    if ((varbitplayer_22875 != 0)) {
        int1 = enum_getvalue(0, 26, 10153 as cs2enum, varbitplayer_22875);
        if ((int1 != -1 as cs2enum)) {
            int2 = script13136(int0);
            if ((int2 == -1 as graphic)) {
                int2 = enum_getvalue(23, 23, int1, int0);
            };
            if ((int2 == -1 as graphic)) {
                int2 = int0;
            };
        };
    };
    return int2;
}