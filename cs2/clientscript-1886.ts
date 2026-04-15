//
function script1886(int0: int): component {
    var int1 = script10405(int0);
    var int2 = struct_getparam(script10405(struct_getparam(int1, 3520)), 3503);
    if ((int2 == comp(-1, 65535))) {
        int2 = struct_getparam(int1, 3503);
        if ((int2 != comp(-1, 65535))) {
            int2 = IF_GETPARENTLAYER(int2);
        };
    };
    return int2;
}