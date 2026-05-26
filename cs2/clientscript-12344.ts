//
function script12344(int0: number, int1: number): number {
    var int2 = script10405(int0);
    if ((int2 == -1)) {
        return 0;
    };
    var int3 = comp(-1, 65535);
    if ((int1 == 1)) {
        int3 = struct_getparam(int2, 3514);
        if ((int3 == comp(-1, 65535))) {
            return 0;
        };
        while ((IF_GETLAYER(int3) != comp(-1, 65535))) {
            int3 = IF_GETLAYER(int3);
        };
        if ((IF_GETPARENTLAYER(int3) != -1)) {
            return 1;
        };
        return 0;
    };
    int3 = struct_getparam(int2, 3505);
    if ((int3 == comp(-1, 65535))) {
        return 0;
    };
    return IF_HASSUB(int3);
}