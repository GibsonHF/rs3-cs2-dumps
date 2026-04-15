//
function script12612(int0: struct): boolean {
    var int1 = comp(-1, 65535);
    if ((struct_getparam(int0, 5770) == true)) {
        int1 = struct_getparam(int0, 3503);
        if ((int1 == comp(-1, 65535))) {
            return false;
        };
        if ((IF_GETTRANS(int1) == 0)) {
            return struct_getparam(int0, 3521);
        };
        return false;
    };
    return struct_getparam(int0, 3521);
}