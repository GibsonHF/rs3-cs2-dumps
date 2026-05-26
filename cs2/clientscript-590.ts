//
function script590(int0: number): void {
    var int1 = 0;
    var int2 = INV_SIZE(937);
    var int3 = -1;
    while ((int1 < int2)) {
        int3 = INV_GETOBJ(937, int1);
        if (((int3 != -1) && (OC_CATEGORY(int3) != 5298))) {
            script1497(int3, INV_GETNUM(937, int1));
        };
        int1 = (int1 + 1);
    };
    return;
}