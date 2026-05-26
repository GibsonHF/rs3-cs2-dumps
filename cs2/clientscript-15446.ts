//
function script15446(int0: number, int1: number): number {
    var int2 = IF_GETPARENTLAYER(int0);
    while ((int2 != comp(-1, 65535))) {
        if ((int2 == int1)) {
            return 0;
        };
        int2 = IF_GETPARENTLAYER(int2);
    };
    return 1;
}