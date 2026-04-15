//
function script939(): void {
    var int0 = 0;
    var int1 = -1 as obj;
    while ((int0 < INV_SIZE(90 as inv))) {
        if ((CC_FIND(comp(335, 16), int0) == 1)) {
            int1 = INVOTHER_GETOBJ(90 as inv, int0);
            script812(int1);
        };
        int0 = (int0 + 1);
    };
    return;
}