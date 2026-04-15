//
function script6572(int0: struct): unknown_int {
    if ((INV_GETOBJ(94 as inv, 13) != 30891 as obj)) {
        return 0;
    };
    if ((struct_getparam(int0, 4133) == 1)) {
        return 0;
    };
    if (((varplayer_1041 > 0) && (script16792() == 1))) {
        return 0;
    };
    if ((int0 == 14790 as struct)) {
        return 0;
    };
    var int1 = script6579(int0);
    if ((varclient_4099 > 0)) {
        if ((varclient_4099 >= int1)) {
            return 1;
        };
        if ((varclient_4100 < (int1 - varclient_4099))) {
            return 1;
        };
        return 0;
    };
    return 0;
}