//
function script9184(): void {
    if ((varbitplayer_20797 == 1)) {
        return;
    };
    if ((varplayer_3233 < 1)) {
        script6748();
        return;
    };
    var int0 = -1;
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
    if ((struct_getparam(enum_getvalue(0, 73, int1, varplayer_3233), 2701) > 0)) {
        IF_SETHIDE(false, comp(1344, 101));
    };
    IF_SETHIDE(false, comp(1344, 107));
    IF_SETHIDE(true, comp(1344, 106));
    return;
}