//
function script856(): void {
    if ((IF_GETWIDTH(comp(202, 11)) == 147)) {
        return;
    };
    var int0 = 1;
    var int1 = 2;
    var int2 = 0;
    var int3 = varbitplayer_41523;
    var int4 = 0;
    var int5 = 0;
    var int6 = 13238280;
    switch (varbitplayer_41523) {
        case 30: {
            int5 = 147;
            int6 = 13238283;
            int2 = 147;
            break;
        }
        case 15: {
            int5 = 126;
            int6 = 13238282;
            int2 = 126;
            break;
        }
        case 5: {
            int5 = 87;
            int6 = 13238281;
            int2 = 87;
            break;
        }
        case 2: {
            int5 = 74;
            int6 = 13238280;
            int2 = 74;
            break;
        }
        default: {
            if ((varbitplayer_41523 > 15)) {
                int0 = 4;
            } else if ((varbitplayer_41523 > 5)) {
                int0 = 3;
            } else if ((varbitplayer_41523 > 2)) {
                int0 = 2;
            };
            switch (int0) {
                case 1: {
                    int2 = 74;
                    break;
                }
                case 2: {
                    int2 = 87;
                    int1 = (5 - 2);
                    int3 = (varbitplayer_41523 - 2);
                    int6 = 13238281;
                    break;
                }
                case 3: {
                    int2 = 126;
                    int1 = (15 - 5);
                    int3 = (varbitplayer_41523 - 5);
                    int6 = 13238282;
                    break;
                }
                case 4: {
                    int2 = 147;
                    int1 = (30 - 15);
                    int3 = (varbitplayer_41523 - 15);
                    int6 = 13238283;
                    break;
                }
            };
            int4 = ((int2 * 100) / int1);
            int5 = MIN(((int4 * int3) / 100), int2);
            break;
        }
    };
    IF_SETONTIMER(callback(script857, int6, int5, int2), 13238274);
    return;
}