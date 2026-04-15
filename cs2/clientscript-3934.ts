//
function script3934(int0: component): int {
    if ((int0 == comp(-1, 65535))) {
        return -1;
    };
    var int1 = IF_GETLAYER(int0);
    while ((int1 != comp(-1, 65535))) {
        var int0 = int1;
        int1 = IF_GETLAYER(int0);
    };
    int1 = IF_GETPARENTLAYER(int0);
    if ((int1 == struct_getparam(script10405(1007), 3505))) {
        return 1007;
    };
    if ((int1 == struct_getparam(script10405(1006), 3505))) {
        return 1006;
    };
    if ((int1 == struct_getparam(script10405(1047), 3505))) {
        return 1047;
    };
    return -1;
}