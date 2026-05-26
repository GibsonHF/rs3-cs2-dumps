//
function script9931(int0: number, int1: number): number {
    if (((int0 == -1) || (int1 == -1))) {
        return 0;
    };
    while ((int0 != -1)) {
        if ((int0 == int1)) {
            return 1;
        };
        var int0 = IF_GETPARENTLAYER(int0);
    };
    return 0;
}