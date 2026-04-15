//
function script2355(int0: unknown_int): void {
    var int1 = -1 as model;
    if ((int0 == 0)) {
        if ((varbitplayer_17138 == ENUM_GETOUTPUTCOUNT(2193 as cs2enum))) {
            if ((script2270() == 1)) {
                int1 = enum_getvalue(0, 31, 2194 as cs2enum, 0);
            } else {
                int1 = enum_getvalue(0, 31, 2193 as cs2enum, 0);
            };
        } else if ((script2270() == 1)) {
            int1 = enum_getvalue(0, 31, 2194 as cs2enum, varbitplayer_17138);
        } else {
            int1 = enum_getvalue(0, 31, 2193 as cs2enum, varbitplayer_17138);
        };
    } else if ((varbitplayer_17138 == 0)) {
        if ((script2270() == 1)) {
            int1 = enum_getvalue(0, 31, 2194 as cs2enum, ENUM_GETOUTPUTCOUNT(2193 as cs2enum));
        } else {
            int1 = enum_getvalue(0, 31, 2193 as cs2enum, ENUM_GETOUTPUTCOUNT(2193 as cs2enum));
        };
    } else if ((script2270() == 1)) {
        int1 = enum_getvalue(0, 31, 2194 as cs2enum, varbitplayer_17138);
    } else {
        int1 = enum_getvalue(0, 31, 2193 as cs2enum, varbitplayer_17138);
    };
    IF_SETMODEL(int1, comp(884, 8));
    return;
}