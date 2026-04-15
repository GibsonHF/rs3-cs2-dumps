//
function script9952(int0: struct): struct {
    var int1 = -1 as cs2enum;
    var int2 = -1 as struct;
    var int3 = script15721();
    if ((int3 != 0)) {
        int1 = enum_getvalue(0, 26, 9014 as cs2enum, int3);
        if ((int1 != -1 as cs2enum)) {
            int2 = enum_getvalue(73, 73, int1, int0);
            if ((int2 != -1 as struct)) {
                var int0 = int2;
            };
        };
    };
    if ((varbitplayer_38842 == 1)) {
        int2 = script14242(-1 as struct, int0, 1);
        if ((int2 != -1 as struct)) {
            return int2;
        };
    };
    return int0;
}