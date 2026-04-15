//
function script19823(int0: unknown_int): int {
    var int1 = MODULO(DATE_RUNEDAY(), 12);
    if ((((int0 == 1) && (varplayer_12121 >= 3)) && (varbitplayer_57662 != 0))) {
        return varbitplayer_57662;
    };
    if ((int1 <= 3)) {
        return 1;
    };
    if (((int1 <= 7) && (int1 > 3))) {
        return 2;
    };
    return 3;
}