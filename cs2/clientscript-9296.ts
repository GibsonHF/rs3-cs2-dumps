//
function script9296(int0: number, int1: number): number {
    if ((OC_CATEGORY(int1) != 3729)) {
        return 0;
    };
    while ((int1 != -1 as obj)) {
        if ((INV_TOTAL(int0, int1) > 0)) {
            return 1;
        };
        var int1 = item_getparam(int1, 5423);
    };
    return 0;
}