//
function script13100(int0: struct, int1: unknown_int): unknown_int {
    if ((struct_getparam(int0, 2547) == true)) {
        return 0;
    };
    if ((struct_getparam(int0, 4419) != -1 as struct)) {
        var int0 = struct_getparam(int0, 4419);
    };
    if ((struct_getparam(int0, 4742) > varplayer_3079)) {
        return 0;
    };
    var int2 = 0;
    var [int2, int1] = script13101(int0);
    if ((int2 == 0)) {
        return 0;
    };
    if (((int1 == 0) && (struct_getparam(int0, 4743) < varplayer_3079))) {
        if ((struct_getparam(int0, 6350) <= struct_getparam(int0, 4743))) {
            return 0;
        };
        if ((struct_getparam(int0, 6350) > varplayer_3079)) {
            return 0;
        };
        if ((struct_getparam(int0, 6351) < varplayer_3079)) {
            return 0;
        };
    };
    return 1;
}