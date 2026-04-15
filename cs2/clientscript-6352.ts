//
function script6352(int0: component): unknown_int {
    if ((int0 == comp(-1, 65535))) {
        return 0;
    };
    var int1 = script10074();
    while ((int0 != comp(-1, 65535))) {
        if ((IF_GETHIDE(int0) == true)) {
            return 0;
        };
        if ((int0 == int1)) {
            return 1;
        };
        var int0 = IF_GETPARENTLAYER(int0);
    };
    return 0;
}