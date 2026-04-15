//
function script3638(int0: struct, int1: obj, int2: unknown_int): graphic {
    if (((int1 != -1 as obj) && (int1 != 49137 as obj))) {
        if ((int2 == 1)) {
            return item_getparam(int1, 1261);
        };
        return item_getparam(int1, 1262);
    };
    if (((int0 != -1 as struct) && (int0 != 40074 as struct))) {
        if ((int2 == 1)) {
            return struct_getparam(int0, 1261);
        };
        return struct_getparam(int0, 1262);
    };
    return -1 as graphic;
}