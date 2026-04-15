//
function script3920(int0: struct, int1: int): unknown_int {
    if ((int0 != -1 as struct)) {
        if ((struct_getparam(int0, 8973) == true)) {
            return 3;
        };
        if (((struct_getparam(int0, 8979) == true) && (struct_getparam(int0, 9312) == false))) {
            if ((struct_getparam(int0, 9311) == true)) {
                return 7;
            };
            return 5;
        };
    };
    if ((int1 == 0)) {
        if ((struct_getparam(int0, 9311) == true)) {
            return 7;
        };
        return 5;
    };
    if ((struct_getparam(int0, 9311) == true)) {
        return 6;
    };
    return 4;
}