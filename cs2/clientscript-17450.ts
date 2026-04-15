//
function script17450(): int {
    var int0 = script17451();
    if ((int0 == 0)) {
        switch (varplayer_11065) {
            case 48326: {
                int0 = SCALE(STAT_BASE(28 as stat), 100, 25);
                break;
            }
            case 48327: {
                int0 = SCALE(STAT_BASE(28 as stat), 100, 50);
                break;
            }
        };
        if ((((int0 != 0) && (item_getparam(INV_GETOBJ(94 as inv, 13), 8928) == 49089 as struct)) && (varbitplayer_54731 == 2))) {
            int0 = (int0 + 15);
        };
    };
    return int0;
}