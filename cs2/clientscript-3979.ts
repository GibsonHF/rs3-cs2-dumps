//
function script3979(int0: int): unknown_int {
    if ((script16840(script12477(), 4) == 1)) {
        return 1;
    };
    if ((int0 == -1)) {
        return 1;
    };
    var int1 = enum_getvalue(0, 3, 2252 as cs2enum, int0);
    if ((int1 == -1 as quest)) {
        script12478(`No .quest found for quest_ID #${inttostring(int0, 10)}.`);
        return 1;
    };
    if ((script4148() == true)) {
        return 1;
    };
    if ((quest_getparam(int1, 7887) == 0)) {
        return 1;
    };
    if ((script3980(int1) == 1)) {
        return 1;
    };
    switch (int0) {
        case 85: {
            if ((varbitplayer_12837 == 6)) {
                return 1;
            };
            break;
        }
        case 154: {
            if ((varbitplayer_9902 == 11)) {
                return 1;
            };
            break;
        }
        case 149: {
            if ((varbitplayer_12907 == 12)) {
                return 1;
            };
            break;
        }
        default: {
            return 0;
        }
    };
    return 0;
}