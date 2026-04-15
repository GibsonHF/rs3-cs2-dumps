//
function script4034(int0: obj): unknown_int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    if ((OC_WEARPOS(int0) != 1)) {
        return 0;
    };
    var int1 = item_getparam(int0, 7897);
    if ((int1 == 0)) {
        return 0;
    };
    if (((int1 != 1) && (item_getparam(int0, 258) == 1))) {
        return 0;
    };
    if (((((varbitplayer_15176 == 1) || (varbitplayer_15177 == 1)) || (varbitplayer_15178 == 1)) && (script7167(99, 1) == 1))) {
        return 1;
    };
    return 0;
}