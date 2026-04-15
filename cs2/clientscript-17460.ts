//
function script17460(int0: struct): int {
    var int1 = 0;
    var int2 = 0;
    switch (int0) {
        case 48326: {
            int1 = 25;
            break;
        }
        case 48327: {
            int1 = 50;
            break;
        }
    };
    if (((item_getparam(INV_GETOBJ(94 as inv, 13), 8928) == 49089 as struct) && (varbitplayer_54731 == 2))) {
        int2 = 15;
    };
    return (SCALE(STAT_BASE(28 as stat), 100, int1) + int2);
}