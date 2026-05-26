//
function script939(): void {
    var int0 = 0;
    var int1 = -1;
    while ((int0 < INV_SIZE(90))) {
        if ((CC_FIND(21954576, int0) == 1)) {
            int1 = INVOTHER_GETOBJ(90, int0);
            script812(int1);
        };
        int0 = (int0 + 1);
    };
    return;
}