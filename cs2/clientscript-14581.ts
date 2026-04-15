//
function script14581(): int {
    var int0 = 2;
    var int1 = STAT_BASE(27 as stat);
    if ((int1 >= 101)) {
        int0 = 5;
    } else if ((int1 >= 82)) {
        int0 = 4;
    } else if ((int1 >= 43)) {
        int0 = 3;
    };
    if ((OC_CATEGORY(INV_GETOBJ(94 as inv, 17)) == 4699 as category)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_55527 == 1)) {
        int0 = (int0 + 1);
    };
    int0 = (int0 * script11927(27 as stat));
    return int0;
}