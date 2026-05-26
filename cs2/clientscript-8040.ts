//
function script8040(int0: number, int1: number): number {
    if ((int1 == -1 as obj)) {
        return 0;
    };
    if ((OC_WEARPOS(int1) == 3)) {
        if (((OC_WEARPOS2(int1) == 5) && (INV_GETOBJ(int0, 5) != -1 as obj))) {
            return 1;
        };
        return 0;
    };
    if ((OC_WEARPOS(int1) != 5)) {
        return 0;
    };
    var int2 = INV_GETOBJ(int0, 3);
    if ((int2 == -1 as obj)) {
        return 0;
    };
    if ((OC_WEARPOS2(int2) == 5)) {
        return 1;
    };
    return 0;
}