//
function script18157(int0: int): struct {
    var int1 = -1 as struct;
    var int2 = script18158(int0);
    var int3 = 0;
    if ((int2 == -1 as cs2enum)) {
        return -1 as struct;
    };
    if ((varbitplayer_16574 == int0)) {
        int1 = enum_getvalue(0, 73, int2, varbitplayer_16575);
    } else if ((varbitplayer_16578 == int0)) {
        int1 = enum_getvalue(0, 73, int2, varbitplayer_16579);
    } else if ((varbitplayer_16582 == int0)) {
        int1 = enum_getvalue(0, 73, int2, varbitplayer_16583);
    } else if ((varbitplayer_16586 == int0)) {
        int1 = enum_getvalue(0, 73, int2, varbitplayer_16587);
    } else if ((varbitplayer_16590 == int0)) {
        int1 = enum_getvalue(0, 73, int2, varbitplayer_16591);
    } else {
        int1 = enum_getvalue(0, 73, int2, 1);
        int3 = struct_getparam(int1, 1269);
        while (((script15771(int0, int3) == 1) && (int3 != 0))) {
            int1 = enum_getvalue(0, 73, int2, int3);
            int3 = struct_getparam(int1, 1269);
        };
    };
    return int1;
}