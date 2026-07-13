//
function script9739(int0: number, int1: number): number {
    var int2 = 1;
    switch (int0) {
        case 19065: {
            if ((varbitplayer_15546 == 0)) {
                int2 = 0;
            };
            break;
        }
        case 19066: {
            if ((varbitplayer_15630 == 0)) {
                int2 = 0;
            };
            break;
        }
        case 19070: {
            if ((varbitplayer_15936 == 0)) {
                int2 = 0;
            };
            break;
        }
        case 19073: {
            if ((varbitplayer_15886 == 0)) {
                int2 = 0;
            };
            break;
        }
        case 19105: {
            if ((script18522(529) == 0)) {
                int2 = 0;
            };
            break;
        }
    };
    var int3 = struct_getparam(int1, 2871);
    if ((int3 == 2)) {
        if ((QUEST_FINISHED(24 as quest) == false)) {
            return 0;
        };
    } else if (((int3 == 1) && (QUEST_FINISHED(135 as quest) == false))) {
        return 0;
    };
    return int2;
}