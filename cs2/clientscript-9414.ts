//
function script9414(int0: struct): unknown_int {
    var int1 = -1 as obj;
    var int2 = -1 as obj;
    var int3 = -1 as obj;
    if ((varbitplayer_21115 == 3)) {
        int1 = struct_getparam(int0, 3931);
        int2 = struct_getparam(int0, 3933);
        int3 = struct_getparam(int0, 3935);
    } else {
        int1 = struct_getparam(int0, 3932);
        int2 = struct_getparam(int0, 3934);
        int3 = struct_getparam(int0, 3936);
    };
    var int4 = 0;
    if ((item_getparam(int1, 3943) == 1)) {
        if ((varbitplayer_21115 == 3)) {
            int4 = varbitplayer_21223;
        } else {
            int4 = varbitplayer_21224;
        };
    };
    if (((((script259(int1) > 0) || (script259(int2) > 0)) || (script259(int3) > 0)) || (int4 == 1))) {
        return 1;
    };
    return 0;
}