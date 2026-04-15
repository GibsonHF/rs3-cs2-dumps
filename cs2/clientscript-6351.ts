//
function script6351(): unknown_int {
    var int0 = comp(-1, 65535);
    var int1 = script10074();
    if ((CC_GETHIDE() == true)) {
        return 0;
    };
    int0 = CC_GETPARENTLAYER();
    while ((int0 != comp(-1, 65535))) {
        if ((IF_GETHIDE(int0) == true)) {
            return 0;
        };
        if ((int0 == int1)) {
            return 1;
        };
        int0 = IF_GETPARENTLAYER(int0);
    };
    return 0;
}