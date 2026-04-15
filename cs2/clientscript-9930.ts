//
function script9930(int0: component): unknown_int {
    if ((int0 == comp(-1, 65535))) {
        return 0;
    };
    var int1 = comp(-1, 65535);
    int1 = CC_GETPARENTLAYER();
    while ((int1 != comp(-1, 65535))) {
        if ((int1 == int0)) {
            return 1;
        };
        int1 = IF_GETPARENTLAYER(int1);
    };
    return 0;
}