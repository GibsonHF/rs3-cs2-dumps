//
function script3293(int0: unknown_int): int {
    var int1 = MODULO(((DATE_RUNEDAY() + 21) / 7), 6);
    if ((((int0 == 1) && (varplayer_12121 >= 4)) && (varbitplayer_57664 != 0))) {
        return enum_getvalue(0, 0, 7211 as cs2enum, varbitplayer_57664);
    };
    return int1;
}