//
function script2358(int0: component): void {
    var int1 = enum_getvalue(9, 0, 2125 as cs2enum, int0);
    var int2 = enum_getvalue(9, 0, 2124 as cs2enum, int0);
    var int3 = 1;
    if ((varplayer_2644 == comp(-1, 65535))) {
        if ((int2 == 1)) {
            int3 = TESTBIT(varplayer_2641, int1);
        } else if ((int2 == 2)) {
            int3 = TESTBIT(varplayer_2642, int1);
        } else {
            int3 = TESTBIT(varplayer_2643, int1);
        };
        if ((int3 == 0)) {
            IF_SENDTOBACK(int0);
        };
        return;
    };
    var int4 = enum_getvalue(9, 73, 704 as cs2enum, varplayer_2644);
    var int5 = struct_getparam(int4, 1222);
    var int6 = struct_getparam(int4, 1223);
    var int7 = enum_getvalue(9, 9, 1592 as cs2enum, varplayer_2644);
    IF_SETPOSITION(int5, int6, 0, 0, int7);
    return;
}