//
function script16928(int0: number): number {
    if ((item_getparam(int0, 258) == 0)) {
        return 0;
    };
    if ((item_getparam(int0, 8707) == true)) {
        if ((script16823() == 1)) {
            return 0;
        };
        if ((script19663(int0) == 0)) {
            return 1;
        };
        return 0;
    };
    if ((script16823() == 1)) {
        return 1;
    };
    return 0;
}