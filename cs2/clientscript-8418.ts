//
function script8418(int0: struct, int1: unknown_int): struct {
    var int2 = struct_getparam(int0, 3518);
    var int3 = -1 as struct;
    if ((varbitplayer_38842 == 1)) {
        int3 = script14242(int0, int2, int1);
        if ((int3 != -1 as struct)) {
            return int3;
        };
    } else if ((varbitplayer_27169 == 1)) {
        if (((int0 == 21278 as struct) && (varbitplayer_60446 == 1))) {
            return 28517 as struct;
        };
    } else if (((int0 == 21278 as struct) && (varbitplayer_60446 == 1))) {
        return 28517 as struct;
    };
    int3 = script9952(int2);
    if ((int3 != -1 as struct)) {
        int2 = int3;
    };
    if ((int1 == 1)) {
        return int2;
    };
    if ((int0 == 21136 as struct)) {
        return int2;
    };
    if ((((varbitplayer_19928 == 1) && (script1186() == 1)) || (script12616(int0) == 1))) {
        int3 = struct_getparam(int2, 3795);
        if ((int3 != -1 as struct)) {
            int2 = int3;
        };
    } else if ((varbitplayer_19924 == 1)) {
        int3 = struct_getparam(int2, 3794);
        if ((int3 != -1 as struct)) {
            int2 = int3;
        };
    };
    return int2;
}