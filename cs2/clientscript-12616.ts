//
function script12616(int0: struct): unknown_int {
    var int1 = struct_getparam(int0, 3503);
    if (((int1 != comp(-1, 65535)) && (struct_getparam(int0, 5770) == true))) {
        if ((IF_GETTRANS(int1) == 0)) {
            return 0;
        };
        return 1;
    };
    return 0;
}