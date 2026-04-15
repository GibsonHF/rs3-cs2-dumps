//
function script8081(int0: int, int1: overlayinterface): unknown_int {
    var int2 = script10405(int0);
    var int3 = comp(-1, 65535);
    if ((int2 != -1 as struct)) {
        int3 = struct_getparam(int2, 3505);
        if ((int3 != comp(-1, 65535))) {
            if ((int1 == -1 as overlayinterface)) {
                if ((IF_HASSUB(int3) == 1)) {
                    return 1;
                };
            } else if ((IF_HASSUBOVERLAY(int3, int1) == 1)) {
                return 1;
            };
        };
    };
    return 0;
}