//
function script6746(): void {
    if ((varplayer_3233 < 1)) {
        script6748();
        return;
    };
    var int0 = -1 as struct;
    var int1 = -1 as cs2enum;
    var int2 = 0;
    switch (varbitplayer_20794) {
        case 0:
        case 1: {
            int1 = 6452 as cs2enum;
            break;
        }
        case 2: {
            int1 = 8014 as cs2enum;
            break;
        }
        case 3: {
            int1 = 8015 as cs2enum;
            break;
        }
        case 4: {
            int1 = 8016 as cs2enum;
            break;
        }
        case 5: {
            int1 = 8017 as cs2enum;
            break;
        }
    };
    if ((int1 == -1 as cs2enum)) {
        script6748();
        return;
    };
    int0 = enum_getvalue(0, 73, int1, varplayer_3233);
    script6747(int0);
    IF_SETONVARTRANSMIT(callback(script10621, int0, 6901, 6902, 1269, 8738, 8739, 5), comp(1344, 51));
    return;
}