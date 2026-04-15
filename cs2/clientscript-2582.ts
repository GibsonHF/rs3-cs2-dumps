//[proc,graphics_options_detailset]
function script2582(int0: struct, int1: int, int2: unknown_int): unknown_int {
    var int3 = struct_getparam(int0, 6800);
    if ((CLIENTOPTION_EXISTS(int3) == 0)) {
        switch (int0) {
            case 845: {
                varclient_178 = int1;
                if ((GETWINDOWMODE() == 3)) {
                    if ((FULLSCREEN_ENTER(FULLSCREEN_GETMODE(int1)) == 1)) {
                        return 1;
                    };
                    return 0;
                };
                return 1;
            }
            case 33102: {
                varclient_3698 = int1;
                script13878();
                return 1;
            }
        };
        return 0;
    };
    if ((CLIENTOPTION_CANMOD(int3) == 0)) {
        return 0;
    };
    switch (int3) {
        case 13: {
            var int1 = ((1 + int1) * 5);
            break;
        }
        case 14: {
            int1 = ((1 + int1) * 5);
            break;
        }
        case 11: {
            int1 = enum_getvalue(0, 0, 488 as cs2enum, int1);
            break;
        }
        case 18: {
            int1 = (50 + (int1 * 10));
            break;
        }
    };
    if ((unk11064(int3, int1) == 3)) {
        return 0;
    };
    CLIENTOPTION_SET(int3, int1);
    if ((int3 == 6)) {
        varclient_987 = script734(int1);
        varbitplayer_60054 = int1;
    } else if ((int3 == 21)) {
        script15671();
    };
    script2593();
    return 1;
}