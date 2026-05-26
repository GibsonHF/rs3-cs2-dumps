//
function script7089(int0: number): number {
    if ((script14091(int0) == 1)) {
        return 1;
    };
    if ((INV_TOTAL(93, int0) > 0)) {
        return 1;
    };
    if (((OC_WEARPOS(int0) != -1) && (INV_TOTAL(94, int0) > 0))) {
        return 1;
    };
    return script7090(int0);
}