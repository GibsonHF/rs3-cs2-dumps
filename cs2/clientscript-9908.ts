//
function script9908(): unknown_int {
    var int0 = script10405(17);
    if ((int0 == -1 as struct)) {
        return -1;
    };
    var int1 = struct_getparam(int0, 3505);
    if ((int1 == comp(-1, 65535))) {
        return -1;
    };
    return IF_HASSUB(int1);
}