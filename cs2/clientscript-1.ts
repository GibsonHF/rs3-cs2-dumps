//[proc,inv_total_available]
function script1(int0: inv, int1: obj): int {
    if (((OC_MEMBERS(int1) == 1) && (MAP_MEMBERS() == 0))) {
        return 0;
    };
    return INV_TOTAL(int0, int1);
}