//
function script6034(): int {
    var int0 = 0;
    var int1 = 0;
    var int2 = 1;
    var int3 = 1;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    while ((int2 < 7)) {
        switch (int2) {
            case 1: {
                int1 = varbitplayer_4126;
                break;
            }
            case 2: {
                int1 = varbitplayer_4127;
                break;
            }
            case 3: {
                int1 = varbitplayer_4131;
                break;
            }
            case 4: {
                int1 = varbitplayer_4132;
                break;
            }
            case 5: {
                int1 = varbitplayer_4133;
                break;
            }
            case 6: {
                int1 = varbitplayer_4134;
                break;
            }
        };
        while (((int3 != 100) && (int6 == 0))) {
            int5 = enum_getvalue(0, 0, 5034 as cs2enum, int3);
            if ((int1 >= int5)) {
                int4 = int3;
            } else {
                int6 = 1;
            };
            int3 = (int3 + 1);
        };
        int2 = (int2 + 1);
        int0 = (int0 + int4);
        [int4, int3] = [0, 1];
        int6 = 0;
    };
    return int0;
}