//
function script9930(int0: number): number {
    if ((int0 == -1)) {
        return 0;
    };
    var int1 = -1;
    int1 = CC_GETPARENTLAYER();
    while ((int1 != -1)) {
        if ((int1 == int0)) {
            return 1;
        };
        int1 = IF_GETPARENTLAYER(int1);
    };
    return 0;
}