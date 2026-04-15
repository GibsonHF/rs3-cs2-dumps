//
function script8113(int0: obj, int1: int): int {
    if ((script6552(int0) == 1)) {
        if ((item_getparam(int0, 4901) == 1)) {
            return 2;
        };
        if ((item_getparam(int0, 4903) == 1)) {
            return 3;
        };
        return 4;
    };
    if (((varbitplayer_42064 == 1) && (enum_getreversecount(33, 14535 as cs2enum, int0) != 0))) {
        return 1;
    };
    return int1;
}