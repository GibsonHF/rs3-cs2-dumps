//
function script9931(int0: component, int1: component): unknown_int {
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
        return 0;
    };
    while ((int0 != comp(-1, 65535))) {
        if ((int0 == int1)) {
            return 1;
        };
        var int0 = IF_GETPARENTLAYER(int0);
    };
    return 0;
}