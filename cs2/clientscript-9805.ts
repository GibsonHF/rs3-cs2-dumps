//
function script9805(int0: inv, int1: obj): int {
    var int2 = 0;
    if ((OC_CATEGORY(int1) != 3729 as category)) {
        return 0;
    };
    while ((int1 != -1 as obj)) {
        int2 = (int2 + (INV_TOTAL(int0, int1) * item_getparam(int1, 5422)));
        var int1 = item_getparam(int1, 5423);
    };
    return int2;
}