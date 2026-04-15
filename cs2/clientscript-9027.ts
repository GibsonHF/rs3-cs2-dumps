//
function script9027(int0: struct, int1: quest, int2: achievement): boolean {
    if ((int1 != -1 as quest)) {
        return QUEST_GETMEMBERS(int1);
    };
    if ((int2 != -1 as achievement)) {
        return ACHIEVEMENT_GETMEMBERS(int2);
    };
    if ((int0 != -1 as struct)) {
        if ((struct_getparam(int0, 4253) != -1 as struct)) {
            var int0 = struct_getparam(int0, 4253);
        };
        switch (script7663(int0, int1, int2)) {
            case 7: {
                if ((varbitplayer_9072 > 1)) {
                    return true;
                };
                int0 = script16091();
                if ((int0 != -1 as struct)) {
                    if ((struct_getparam(int0, 466) <= 5)) {
                        return false;
                    };
                    return true;
                };
                break;
            }
            case 1: {
                if ((struct_getparam(int0, 1345) > 0)) {
                    var int1 = enum_getvalue(0, 3, 2252 as cs2enum, struct_getparam(int0, 1345));
                    if ((int1 != -1 as quest)) {
                        return QUEST_GETMEMBERS(int1);
                    };
                };
                break;
            }
            case 4: {
                return struct_getparam(int0, 4941);
            }
            default: {
                if (((struct_getparam(int0, 6415) != 1) && (struct_getparam(int0, 1290) != 1))) {
                    return true;
                };
                break;
            }
        };
    };
    return false;
}