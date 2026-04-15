//
function script590(int0: obj): void {
    var int1 = 0;
    var int2 = INV_SIZE(937 as inv);
    var int3 = -1 as obj;
    while ((int1 < int2)) {
        int3 = INV_GETOBJ(937 as inv, int1);
        if (((int3 != -1 as obj) && (OC_CATEGORY(int3) != 5298 as category))) {
            script1497(int3, INV_GETNUM(937 as inv, int1));
        };
        int1 = (int1 + 1);
    };
    return;
}