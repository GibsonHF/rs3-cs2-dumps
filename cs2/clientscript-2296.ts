//
function script2296(int0: unknown_int): void {
    var int1 = -1 as model;
    if ((int0 == 0)) {
        if ((varbitplayer_17136 == ENUM_GETOUTPUTCOUNT(5770 as cs2enum))) {
            if ((script2270() == 1)) {
                int1 = enum_getvalue(0, 31, 5771 as cs2enum, 0);
            } else {
                int1 = enum_getvalue(0, 31, 5770 as cs2enum, 0);
            };
        } else if ((script2270() == 1)) {
            int1 = enum_getvalue(0, 31, 5771 as cs2enum, varbitplayer_17136);
        } else {
            int1 = enum_getvalue(0, 31, 5770 as cs2enum, varbitplayer_17136);
        };
    } else if ((varbitplayer_17136 == 0)) {
        if ((script2270() == 1)) {
            int1 = enum_getvalue(0, 31, 5771 as cs2enum, ENUM_GETOUTPUTCOUNT(5770 as cs2enum));
        } else {
            int1 = enum_getvalue(0, 31, 5770 as cs2enum, ENUM_GETOUTPUTCOUNT(5770 as cs2enum));
        };
    } else if ((script2270() == 1)) {
        int1 = enum_getvalue(0, 31, 5771 as cs2enum, varbitplayer_17136);
    } else {
        int1 = enum_getvalue(0, 31, 5770 as cs2enum, varbitplayer_17136);
    };
    IF_SETMODEL(int1, comp(884, 9));
    return;
}