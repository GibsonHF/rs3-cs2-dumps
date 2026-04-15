//
function script9038(int0: struct, int1: int): unknown_int {
    if ((int1 < struct_getparam(int0, 3838))) {
        return 0;
    };
    if ((int1 >= struct_getparam(int0, 4632))) {
        return 3;
    };
    var int2 = struct_getparam(int0, 3839);
    if ((int2 != -1 as cs2enum)) {
        if ((enum_getreversecount(0, int2, int1) > 0)) {
            return 1;
        };
    } else if (((int1 >= struct_getparam(int0, 4630)) && (int1 <= struct_getparam(int0, 4631)))) {
        return 1;
    };
    return 2;
}