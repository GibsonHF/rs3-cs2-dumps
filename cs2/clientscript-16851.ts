//
function script16851(int0: struct): boolean {
    if ((int0 == -1 as struct)) {
        return false;
    };
    if ((script16861(MAP_WORLD()) == 1)) {
        return struct_getparam(int0, 8700);
    };
    return struct_getparam(int0, 8701);
}