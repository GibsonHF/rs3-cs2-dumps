//
function script15295(): void {
    var int0 = 0;
    while ((int0 < 7)) {
        CC_CREATE(comp(271, 41), 3, int0);
        CC_SETSIZE(4, 32, 1, 0);
        CC_SETPOSITION(0, (32 * int0), 1, 0);
        CC_SETFILL(1);
        if ((MODULO(int0, 2) == 0)) {
            CC_SETCOLOUR(465184);
        } else {
            CC_SETCOLOUR(1846324);
        };
        int0 = (int0 + 1);
    };
    CC_CREATE(comp(271, 41), 9, int0);
    CC_SETPOSITION(0, (32 * 2), 1, 0);
    CC_SETSIZE(40, 0, 1, 0);
    CC_SETCOLOUR(11837586);
    return;
}