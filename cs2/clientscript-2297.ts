//
function script2297(int0: unknown_int): void {
    var int1 = -1 as model;
    if ((int0 == 0)) {
        if ((varbitplayer_17137 == ENUM_GETOUTPUTCOUNT(2191 as cs2enum))) {
            if ((script2270() == 1)) {
                int1 = enum_getvalue(0, 31, 2192 as cs2enum, 0);
            } else {
                int1 = enum_getvalue(0, 31, 2191 as cs2enum, 0);
            };
        } else if ((script2270() == 1)) {
            int1 = enum_getvalue(0, 31, 2192 as cs2enum, varbitplayer_17137);
        } else {
            int1 = enum_getvalue(0, 31, 2191 as cs2enum, varbitplayer_17137);
        };
    } else if ((varbitplayer_17137 == 0)) {
        if ((script2270() == 1)) {
            int1 = enum_getvalue(0, 31, 2192 as cs2enum, ENUM_GETOUTPUTCOUNT(2192 as cs2enum));
        } else {
            int1 = enum_getvalue(0, 31, 2191 as cs2enum, ENUM_GETOUTPUTCOUNT(2191 as cs2enum));
        };
    } else if ((script2270() == 1)) {
        int1 = enum_getvalue(0, 31, 2192 as cs2enum, varbitplayer_17137);
    } else {
        int1 = enum_getvalue(0, 31, 2191 as cs2enum, varbitplayer_17137);
    };
    IF_SETMODEL(int1, comp(884, 7));
    return;
}