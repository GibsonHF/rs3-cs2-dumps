//
function script6352(int0: number): number {
    if ((int0 == -1)) {
        return 0;
    };
    var int1 = script10074();
    while ((int0 != -1)) {
        if ((IF_GETHIDE(int0) == 1)) {
            return 0;
        };
        if ((int0 == int1)) {
            return 1;
        };
        var int0 = IF_GETPARENTLAYER(int0);
    };
    return 0;
}