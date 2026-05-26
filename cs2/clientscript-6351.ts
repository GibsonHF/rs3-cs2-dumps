//
function script6351(): number {
    var int0 = -1;
    var int1 = script10074();
    if ((CC_GETHIDE() == 1)) {
        return 0;
    };
    int0 = CC_GETPARENTLAYER();
    while ((int0 != -1)) {
        if ((IF_GETHIDE(int0) == 1)) {
            return 0;
        };
        if ((int0 == int1)) {
            return 1;
        };
        int0 = IF_GETPARENTLAYER(int0);
    };
    return 0;
}