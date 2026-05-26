//
function script3638(int0: number, int1: number, int2: number): number {
    if (((int1 != -1) && (int1 != 49137))) {
        if ((int2 == 1)) {
            return item_getparam(int1, 1261);
        };
        return item_getparam(int1, 1262);
    };
    if (((int0 != -1) && (int0 != 40074))) {
        if ((int2 == 1)) {
            return struct_getparam(int0, 1261);
        };
        return struct_getparam(int0, 1262);
    };
    return -1 as graphic;
}