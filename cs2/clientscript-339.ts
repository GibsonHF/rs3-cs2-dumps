//
function script339(int0: number, int1: number): number {
    if (((INV_GETOBJ(94, 3) == 24203) || (INV_GETOBJ(94, 3) == 24200))) {
        if ((varclient_1912 != int1)) {
            return 0;
        };
        if ((varclient_1913 != struct_getparam(int0, 2975))) {
            return 0;
        };
        return varclient_1914;
    };
    return 0;
}