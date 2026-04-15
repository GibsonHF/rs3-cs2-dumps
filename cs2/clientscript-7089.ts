//
function script7089(int0: obj): unknown_int {
    if ((script14091(int0) == 1)) {
        return 1;
    };
    if ((INV_TOTAL(93 as inv, int0) > 0)) {
        return 1;
    };
    if (((OC_WEARPOS(int0) != -1) && (INV_TOTAL(94 as inv, int0) > 0))) {
        return 1;
    };
    return script7090(int0);
}