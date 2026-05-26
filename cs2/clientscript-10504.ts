//
function script10504(int0: number, int1: number): number {
    if ((int1 < 1)) {
        return 0;
    };
    if (((INV_TOTAL(93, int0) > 0) || ((OC_STACKABLE(int0) == 1) && (INV_TOTAL(93, int0) == int1)))) {
        return 1;
    };
    return 0;
}