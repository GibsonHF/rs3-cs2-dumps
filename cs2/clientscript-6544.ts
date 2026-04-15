//
function script6544(): unknown_int {
    if (((varplayer_3079 > 6312) && (varplayer_3079 <= 6367))) {
        return 1;
    };
    if (((DATE_RUNEDAY() == 6312) && (MODULO(DATE_MINUTES(), 1440) > 600))) {
        return 1;
    };
    return 0;
}