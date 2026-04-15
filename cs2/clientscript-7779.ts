//
function script7779(int0: struct): unknown_int {
    var int1 = DATE_RUNEDAY();
    if ((int1 >= struct_getparam(int0, 7972))) {
        return 5;
    };
    if ((int1 >= struct_getparam(int0, 7971))) {
        return 4;
    };
    if ((int1 >= struct_getparam(int0, 7970))) {
        return 3;
    };
    if ((int1 >= struct_getparam(int0, 7969))) {
        return 2;
    };
    if ((int1 >= struct_getparam(int0, 7968))) {
        return 1;
    };
    return 5;
}