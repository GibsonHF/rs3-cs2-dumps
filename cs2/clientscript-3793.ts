//
function script3793(int0: inv, int1: obj, int2: int, int3: int): int {
    var int4 = 0;
    if (((OC_STACKABLE(int1) == 1) || (OC_UNCERT(int1) != int1))) {
        int4 = MAX(0, (int2 - (2147483647 - INV_TOTAL(int0, int1))));
    } else {
        int4 = MAX(0, (((int2 - INV_FREESPACE(int0)) - INV_SIZE(int0)) - int3));
    };
    return int4;
}