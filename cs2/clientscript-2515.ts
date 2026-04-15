//
function script2515(int0: inv, int1: obj): int {
    var int1 = OC_UNCERT(int1);
    var int2 = OC_CERT(int1);
    var int3 = INV_TOTAL(int0, int1);
    if ((int2 != int1)) {
        int3 = (int3 + INV_TOTAL(int0, int2));
    };
    return int3;
}