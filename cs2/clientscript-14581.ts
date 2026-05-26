//
function script14581(): number {
    var int0 = 2;
    var int1 = STAT_BASE(27);
    if ((int1 >= 101)) {
        int0 = 5;
    } else if ((int1 >= 82)) {
        int0 = 4;
    } else if ((int1 >= 43)) {
        int0 = 3;
    };
    if ((OC_CATEGORY(INV_GETOBJ(94, 17)) == 4699)) {
        int0 = (int0 + 1);
    };
    if ((varbitplayer_55527 == 1)) {
        int0 = (int0 + 1);
    };
    int0 = (int0 * script11927(27));
    return int0;
}